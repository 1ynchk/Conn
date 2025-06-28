from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Connections
from .serializers import ConnectionSerializer

@api_view(['GET'])
def check_connection(request):
    
    connection = request.query_params.get('connection')
    print(connection)
    queryset = Connections.objects.filter(name__icontains=connection)
    serialized_queryset = ConnectionSerializer(queryset, many=True).data

    return Response({"status": 'ok', 'comment': 'success', 'data': serialized_queryset})
