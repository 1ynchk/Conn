from django.contrib import admin
from django.urls import path, include

from users.urls import urlpatterns as users
from switches.urls import urlpatterns as switches
from staff.urls import urlpatterns as staff
from stock.urls import urlpatterns as stock
from connection.urls import urlpatterns as connection

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include(users), name='users'),
    path('switches/', include(switches), name='switches'),
    path('staff/', include(staff), name='staff'),
    path('stock/', include(stock), name='stock'),
    path('connection/', include(connection), name='connection'),
]
