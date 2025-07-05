from django.db import models

class Staff(models.Model):
    '''Таблица для сотрудников'''

    name = models.CharField(max_length=255)
    job_number = models.CharField(max_length=3, unique=True)
    empl_number = models.CharField(max_length=50,unique=True)
    email = models.CharField(max_length=155,unique=True)
    
    def __str__(self):
        return self.name
