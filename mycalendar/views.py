from django.shortcuts import render

# Create your views here.

def CalendarView(request):
	return render(request, 'calendar.html')