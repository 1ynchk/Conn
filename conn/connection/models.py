from django.db import models

# Create your models here.
class Connections(models.Model):
    '''Подключения абонентов'''

    types_conn = [
        ("ipoe", "Динамический IP"),
        ("pptp", "Point-To-Point Tunneling Protocol"),
        ("static", "Статический Ethernet IP"), 
        ("L2", "L2 канал"),
        ("openvpn", "openvpn")
    ]

    name = models.CharField(max_length=255, unique=True)
    user = models.ForeignKey('users.Users', on_delete=models.CASCADE)
    type_conn = models.CharField(choices=types_conn)
    vlan = models.CharField(max_length=10, unique=True, null=True)
    addr = models.CharField(max_length=500)

    class Meta:
        unique_together = ('name', 'vlan')

    def __str__(self):
        return self.user.username
