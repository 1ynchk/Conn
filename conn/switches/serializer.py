from rest_framework import serializers

from .models import Switches, Port

class PortsSerializer(serializers.ModelSerializer):
    '''Сериализатор для класса Ports'''
    
    class Meta:
        model = Port
        fields = '__all__'

class SwitchSerializer(serializers.ModelSerializer):
    '''Сериализатор для класса Switch'''

    ports = PortsSerializer(many=True)
    
    class Meta:
        model = Switches
        fields = '__all__' 