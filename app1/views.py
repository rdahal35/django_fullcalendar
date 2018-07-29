from django.shortcuts import render
import requests
from .parse import parse
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseRedirect
import json
import datetime

# Create your views here.


def CalendarDownload(request):
	return render(request, 'app1/index.html')

@csrf_exempt
def ViewEvent(request):
	if request.method== 'POST':
		url= request.POST.get('url')

		try:
			r= requests.get(url, allow_redirects=True)
			open('mycal.ics', 'wb').write(r.content)
			events= parse('mycal.ics')

		except Exception as e:
			pass
		
		eve= []
		for event in events:
			event_sub= {}

			event_sub['title']= str(event.get('summary'))
			event_sub['start']= str(event.get('dtstart').dt)
			event_sub['end']=  str(event.get('dtend').dt)
			# ev= {
			# 	'title': event.get('summary'),
			# 	'dstart': str(event.get('dtstart').dt),
			# 	'dtend': str(event.get('dtend').dt),
			# }
			eve.append(event_sub)
		
		# print(eve)
		events_data = json.dumps(eve)
		return render(request, 'calendar.html', {'events': eve} )
		# {'events': [ event.get('summary') for event in events]}
def change_event(request):
	try:
	    if request.is_ajax():
	        id = request.GET.get('id')
	        print(id)
	        event = Event.objects.get(id=id)
	        if request.method == "PUT":
	            # used to edit/delete appointments
	            json_data = request.read()
	            data = json.loads(json_data)
	            if id:
	                # logic to edit an appointment
	                return JsonResponse(
	                    {'id': event.id, 'title': event.name, 'start': data['start_date'],
	                     'end': data['end_date'],
	                     'allDay': data['allDay']})
	            return JsonResponse("")
	        elif request.method == "GET":
	            # used to get appointments
	            events = None
	            events = Event.objects.filter().order_by('start_date')
	            return JsonResponse([{'id': o.id, 'title': o.name, 'start': (o.start_date.isoformat()),
	                              'end': (o.end_date.isoformat()),
	                              'allDay': IsFullDayAppointment(o.start_date, o.end_date)} for o in events])
	        elif request.method == "POST":
	            # used to save new appointments

	            json_data = request.read()
	            data = json.loads(json_data)
	            event = Event.objects.create()
	            event.save()
	            return JsonResponse(
	                {'id': event.id, 'title': event.name, 'start': data['start_date'], 'end': data['end_date'],
	                 'allDay': data['allDay']})
	        elif request.method == "DELETE":
	        # used to delete appointments
	            if id:
	                print(id)
	                Event.objects.get(pk=id).delete()
	                return JsonResponse("",safe=False)

	except Exception as e:
	    return JsonResponse(e,safe=False)