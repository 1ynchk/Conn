from rest_framework import serializers

from .models import Switches, Port
from connection.serializers import ConnectionSerializer

class PortsSerializer(serializers.ModelSerializer):
    '''Сериализатор для класса Ports'''

    connections = ConnectionSerializer(many=True)
    
    class Meta:
        model = Port
        fields = '__all__'

class SwitchSerializer(serializers.ModelSerializer):
    '''Сериализатор для класса Switch'''

    ports = PortsSerializer(many=True)
    
    class Meta:
        model = Switches
        fields = '__all__' 