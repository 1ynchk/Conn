from django.urls import path 

from .views import check_connection

urlpatterns = [
    path('is-connection-unique/', check_connection, name='is-connection-unique')
    ]
