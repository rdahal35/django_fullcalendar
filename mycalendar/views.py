from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def CalendarView(request):
	return render(request, 'calendar.html')