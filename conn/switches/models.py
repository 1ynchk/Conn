from django.db import models

# Create your models here.
class Switches(models.Model):
    '''Модель для коммутаторов'''

    model = models.CharField(max_length=255)
