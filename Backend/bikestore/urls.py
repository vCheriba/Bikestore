from django.urls import path
from .views import WorkerAPIView, WorkerDetailAPIView, WorkerCreateAPIView

urlpatterns = [
    path('worker/', WorkerAPIView.as_view(), name='name'),
    path('worker/<int:pk>/', WorkerDetailAPIView.as_view(), name='worker_detail'),
    path('worker/create/', WorkerCreateAPIView.as_view(), name='add_worker'),
]