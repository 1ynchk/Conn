from django.urls import path 

from .views import (
        get_all_staff
    )

urlpatterns = [
    path('get-all-staff/', get_all_staff, name='get-all-staff')
]
