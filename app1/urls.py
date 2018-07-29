from django.urls import path, include
from . import views

urlpatterns = [
    path('home/', views.CalendarDownload, name='home'),
    path('calendar/event', views.ViewEvent, name='view_event'),
]