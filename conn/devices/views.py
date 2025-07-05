from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q

from .models import Devices

# Create your views here.
@api_view(['GET'])
def is_mac_unique(request):
    '''Проверяет, уникален ли MAC адрес или серийный номер'''
    
    mac = request.query_params.get('mac') 
    is_mac = request.query_params.get('is_mac')

    try:
        if is_mac == 'true':
            obj = Devices.objects.get(mac_addr=mac)
        else:
            obj = Devices.objects.get(serial_number=mac)
    except Exception:
        return Response({'status': 'ok', 'comment': 'succes', 'is_unique': True})
   
    return Response({'status': 'ok', 'comment': 'succes', 'is_unique': False})
    
