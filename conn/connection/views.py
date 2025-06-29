from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Connections
from .serializers import ConnectionSerializer

@api_view(['GET'])
def check_connection(request):
    '''Возвращает объект подключения'''
    
    connection = request.query_params.get('connection')
    queryset = Connections.objects.filter(name__icontains=connection)
    serialized_queryset = ConnectionSerializer(queryset, many=True).data

    return Response({"status": 'ok', 'comment': 'success', 'data': serialized_queryset})
