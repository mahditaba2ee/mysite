# Generated by Django 4.0.4 on 2022-06-01 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0003_ordermodel_orderitemsmodel'),
    ]

    operations = [
        migrations.AddField(
            model_name='ordermodel',
            name='address',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AddField(
            model_name='ordermodel',
            name='name',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='ordermodel',
            name='phone',
            field=models.CharField(blank=True, max_length=13),
        ),
    ]
