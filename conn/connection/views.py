from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Connections

@api_view(['GET'])
def check_connection(request):
    
    connection = request.query_params.get('connection')
    
    queyset = Connections.objects.filter()
