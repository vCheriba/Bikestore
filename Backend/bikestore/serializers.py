from rest_framework import serializers
from .models import Worker

class WorkerAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = [
            'name',
            'alter',
            'urlaubstage',
            'gehalt',
            'geschlecht',
        ]
