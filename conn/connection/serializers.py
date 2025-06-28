from rest_framework import serializers

from .models import Connections

class ConnectionSerializer(serializers.ModelSerializer):
    '''Сериализатор для подключений'''

    class Meta:
        model = Connections
        fields = '__all__'
