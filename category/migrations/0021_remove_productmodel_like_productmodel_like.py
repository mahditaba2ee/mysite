# Generated by Django 4.0.5 on 2022-08-06 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0020_categorymodel_available'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productmodel',
            name='like',
        ),
        migrations.AddField(
            model_name='productmodel',
            name='like',
            field=models.IntegerField(default=0),
        ),
    ]
