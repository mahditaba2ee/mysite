# Generated by Django 4.0.4 on 2022-06-01 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0004_ordermodel_address_ordermodel_name_ordermodel_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='ordermodel',
            name='view',
            field=models.BooleanField(default=False),
        ),
    ]
