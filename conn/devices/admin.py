from django.contrib import admin

from .models import Devices

@admin.register(Devices)
class AdminDevices(admin.ModelAdmin):
    pass