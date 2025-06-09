from django.urls import path 

from .views import (
    is_mac_unique
)

urlpatterns = [
    path('is-mac-unique/', is_mac_unique, name='is-mac-unique')    
]