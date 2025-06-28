from django.contrib import admin

from .models import Connections

# Register your models here.
@admin.register(Connections)
class AdminConnections(admin.ModelAdmin):
    pass
