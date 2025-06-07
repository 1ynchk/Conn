from django.contrib import admin
from django.urls import path, include

from users.urls import urlpatterns as users
from switches.urls import urlpatterns as switches

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include(users), name='users'),
    path('switches/', include(switches), name='switches')
]
