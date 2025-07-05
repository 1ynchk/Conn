from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Q

from .models import Connections
from .serializers import ConnectionSerializer
from .bll import adding_terminal, adding_connection

@api_view(['GET'])
def check_connection(request):
    '''Возвращает объект подключения'''
    
    connection = request.query_params.get('connection')
    queryset = Connections.objects.filter(name__icontains=connection)
    serialized_queryset = ConnectionSerializer(queryset, many=True).data

    return Response({"status": 'ok', 'comment': 'success', 'data': serialized_queryset})

@api_view(['GET'])
def check_vlan(request):
    '''Проверяет, есть ли подключение с таким вланом'''

    vlan = request.query_params.get('vlan')
    
    try:
        obj = Connections.objects.get(vlan=vlan)

        return Response(
                {
                    'status': 'ok', 
                    'comment': 'such a connection with such vlan exists', 
                    'data': False
                }
            )
    except Exception:
        return Response({'status': 'ok', 'comment': 'success', 'data': True})

@api_view(['POST'])
def add_connection_and_terminal(request):
    '''
       Добавляет терминал,
       привязывает терминал, 
       добавляет подключение
    '''

    type_terminal = request.data.get('type_terminal')
    mac_or_sr = request.data.get('mac_or_sr')
    given_to = request.data.get('given_to')
    name_terminal = request.data.get('name_terminal')
    connection = request.data.get('connection')
    switch = request.data.get('switch')
    port = request.data.get('port')
    vlan = request.data.get('vlan')

    terminal = adding_terminal(type_terminal, mac_or_sr, given_to, name_terminal, connection)

    response = {
            'data': {
                'check_terminal': False,
                'check_conn': False,
                'check_switch': False,
                'check_port': False,
                'check_vlan': False
                }
        }

    if not terminal['is_conn']:
        return Response(response)

    response['data']['check_conn'] = True

    if not terminal['is_new']:
        return Response(response)

    response['data']['check_terminal'] = True
   
    conn = adding_connection(connection, switch, port, vlan)

    if not conn['check_switch']:
        return Response(response)

    response['data']['check_switch'] = True

    if not conn['check_port']:
        return Response(response)

    response['data']['check_port'] = True
    
    if not conn['check_vlan']:
        return Response(response)

    response['data']['check_vlan'] = True
    
    return Response({'status': 'ok', 'comment': 'success', 'data': response})


