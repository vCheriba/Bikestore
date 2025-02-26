from django.db import models

# Create your models here.

class Worker(models.Model):
    name = models.CharField(max_length=100)
    alter = models.IntegerField()
    urlaubstage = models.IntegerField()
    gehalt = models.FloatField()
    geschlecht = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name}"