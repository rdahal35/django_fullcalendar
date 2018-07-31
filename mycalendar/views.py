from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Event
from .serializers import eventSerializer
from django.shortcuts import render_to_response
from django.http import HttpResponse

# Create your views here.

class Get_events_List(APIView):
    def get(self, request):
        events = Event.objects.all()
        serialized = eventSerializer(events, many=True)
        return Response(serialized.data)


@csrf_exempt
def CalendarView(request):		
	return render(request, 'calendar.html')

def saveEvent(request):
	if request.is_ajax():
		message= "Yes I am here"
		print(eventdata)
	else:
		message= " Not ajax"
	return HttpResponse(message)