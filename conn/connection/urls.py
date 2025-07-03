from django.urls import path 

from .views import (
        check_connection, 
        check_vlan,
        add_connection_and_terminal
)

urlpatterns = [
    path('is-connection-unique/', check_connection, name='is-connection-unique'),
    path('is-vlan-unique/', check_vlan, name='is-vlan-unique'),
    path('add-connection-and-terminal/', add_connection_and_terminal, name='add-connection-and-terminal')
    ]
