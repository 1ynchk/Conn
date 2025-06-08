from django.db import models

class Staff(models.Model):
    '''Таблица для сотрудников'''

    name = models.CharField(max_length=255)
    job_number = models.CharField(max_length=3,)
    empl_number = models.CharField(max_length=20,)
    email = models.CharField(max_length=20,)
    
    def __str__(self):
        return self.name
