from django.db import models

# Create your models here.

class Worker(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    alter = models.IntegerField()
    urlaubstage = models.IntegerField()
    gehalt = models.FloatField()
    geschlecht = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name}"
    
class Bike(models.Model):
    id = models.AutoField(primary_key=True)
    modell = models.CharField(max_length=100)
    zoll = models.IntegerField()
    typ = models.CharField(max_length=100)
    farbe = models.CharField(max_length=100)
    anzahl = models.IntegerField()
    kosten = models.FloatField()
    verkaeufe = models.IntegerField()
    vorraetig = models.IntegerField()
    
    def __str__(self):
        return f"{self.modell}"