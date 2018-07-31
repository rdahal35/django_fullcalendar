from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.CalendarView, name='calendar'),
    path('SaveEvent/', views.saveEvent, name='event_save')
    
]