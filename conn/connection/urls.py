from django.urls import path 

from .views import check_connection, check_vlan

urlpatterns = [
    path('is-connection-unique/', check_connection, name='is-connection-unique'),
    path('is-vlan-unique/', check_vlan, name='is-vlan-unique')
    ]
