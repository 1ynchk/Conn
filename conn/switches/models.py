from django.db import models

# Create your models here.
class Switches(models.Model):
    '''Модель для коммутаторов'''

    name = models.CharField(max_length=500, unique=True)
    model = models.CharField(max_length=255)
    ports = models.ManyToManyField('Port')

    def __str__(self):
        return self.model

class SwitchThroughPort(models.Model):
    '''Модель m-t-m для свитчей с портами'''
    
    switch = models.ForeignKey(Switches, on_delete=models.CASCADE) 
    port = models.ForeignKey('Port', on_delete=models.SET_NULL, null=True)
    
    class Meta:
        unique_together = ('switch', 'port')

class PortThroughConnection(models.Model):
    '''Модель m-t-m для подключений с портами'''

    connection = models.ForeignKey('connection.Connections', on_delete=models.SET_NULL, null=True)
    port = models.ForeignKey('Port', on_delete=models.CASCADE)

    class Meta:
        unique_together = ('connection', 'port')

class Port(models.Model):
    '''Модель для порта'''
    
    connectors_types = [
        ("RJ45", "RJ45 / мед."),
        ("RJ11", "RJ11 / мед."),
        ("RS232", "RS232 / мед."),
        ("FC", "FC / опт."),
        ("ST", "ST / опт."),
        ("QSFP", "QSFP / опт."),
        ("N-Type", "N-Type / рад."),
        ("SMA", "SMA / рад."),
        ("RP-SMA", "RP-SMA / рад."),
        ]
    
    name = models.CharField(max_length=200)
    untgd_vlan = models.IntegerField() # Поменять на m-t-m связь в будущем 
    macs = models.IntegerField() # Поменять на m-t-m связь в будущем
    connector = models.CharField(choices=connectors_types, max_length=50)
    comment = models.CharField(max_length=355, null=True)
    connection = models.ManyToManyField('connection.Connections', through=PortThroughConnection)
    
    def __str__(self):
        return self.name
