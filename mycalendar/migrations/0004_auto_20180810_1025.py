# Generated by Django 2.0.7 on 2018-08-10 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mycalendar', '0003_auto_20180807_0425'),
    ]

    operations = [
        migrations.AddField(
            model_name='daydetail',
            name='detail_id',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='daydetail',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]