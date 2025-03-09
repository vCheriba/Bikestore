from rest_framework import serializers
from .models import Worker, Bike

class WorkerAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = [
            'id',
            'name',
            'alter',
            'urlaubstage',
            'gehalt',
            'geschlecht',
        ]

class BikeAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = [
            'id',
            'modell',
            'zoll',
            'typ',
            'farbe',
            'anzahl',
            'kosten',
            'verkaeufe',
            'vorraetig',
        ]