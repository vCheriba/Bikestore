from django.shortcuts import render
from rest_framework import generics
from .models import Worker
from .serializers import WorkerAPISerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser

# Create your views here.

class WorkerAPIView(generics.ListAPIView):
    queryset = Worker.objects.all()
    serializer_class = WorkerAPISerializer
    permission_classes = [IsAuthenticated]

class WorkerDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Worker.objects.all()
    serializer_class = WorkerAPISerializer
    permission_classes = [IsAuthenticated]

class WorkerCreateAPIView(generics.CreateAPIView):
    queryset = Worker.objects.all()
    serializer_class = WorkerAPISerializer
    permission_classes = [IsAuthenticated]