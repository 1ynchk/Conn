from django.contrib import admin
from django.urls import path, include

from users.urls import urlpatterns as users
from switches.urls import urlpatterns as switches
from staff.urls import urlpatterns as staff
from stock.urls import urlpatterns as stock
from connection.urls import urlpatterns as connection
from devices.urls import urlpatterns as devices

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include(users), name='users'),
    path('api/switches/', include(switches), name='switches'),
    path('api/staff/', include(staff), name='staff'),
    path('api/stock/', include(stock), name='stock'),
    path('api/connection/', include(connection), name='connection'),
    path('api/devices/', include(devices), name='devices'),
]
