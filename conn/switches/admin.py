from django.contrib import admin

from .models import Switches, Port

# Register your models here.
@admin.register(Switches)
class AdminSwitches(admin.ModelAdmin):
    pass

@admin.register(Port)
class AdminPort(admin.ModelAdmin):
    pass