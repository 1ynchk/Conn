from django.urls import path

from .views import check_switch

urlpatterns = [
        path('is-switch-unique/', check_switch, name='is-switch-unique')
]
