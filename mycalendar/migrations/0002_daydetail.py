# Generated by Django 2.0.7 on 2018-08-05 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mycalendar', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DayDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(max_length=20)),
                ('price', models.CharField(max_length=10)),
                ('points', models.CharField(max_length=10)),
            ],
        ),
    ]