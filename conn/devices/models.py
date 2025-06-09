from django.db import models

# Create your models here.
class Devices(models.Model):
    '''Таблица для устройств'''
    
    name = models.CharField(max_length=255)
    mac_addr = models.CharField(max_length=18, unique=True, null=True)
    serial_number = models.CharField(max_length=100, unique=True, null=True)
    given_to = models.ForeignKey('staff.Staff', on_delete=models.SET_NULL, null=True)
    comment = models.CharField(max_length=2000)
    
    def __str__(self):
        return self.name
    
    