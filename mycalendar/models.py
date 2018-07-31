from django.db import models

# Create your models here.

class Event(models.Model):
	title= models.CharField(max_length=400)
	start_date= models.CharField(max_length=100)
	end_date= models.CharField(max_length=100)
	color= models.CharField(max_length=100)
