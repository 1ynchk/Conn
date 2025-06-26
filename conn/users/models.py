from django.db import models

# Create your models here.
class Users(models.Model):
    '''Таблица для абонентов'''

    username = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    otchestvo = models.CharField(max_length=100)

    number = models.CharField(max_length=30, unique=True)
    email = models.EmailField(max_length=200, unique=True)

    def __str__(self):
        return self.username
