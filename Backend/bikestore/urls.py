from django.urls import path
from .views import WorkerAPIView, WorkerDetailAPIView, WorkerCreateAPIView, BikeAPIView, BikeDetailAPIView, BikeCreateAPIView

urlpatterns = [
    path('worker/', WorkerAPIView.as_view(), name='name'),
    path('bike/', BikeAPIView.as_view(), name='name'),
    path('worker/<int:pk>/', WorkerDetailAPIView.as_view(), name='worker_detail'),
    path('worker/create/', WorkerCreateAPIView.as_view(), name='add_worker'),
    path('bike/create/', BikeDetailAPIView.as_view(), name='bike_detail'),
    path('bike/<int:pk>/', BikeCreateAPIView.as_view(), name='add_bike'),
]