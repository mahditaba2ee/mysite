# Generated by Django 4.0.4 on 2022-06-03 21:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('category', '0007_ordermodel_usersender'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordermodel',
            name='usersender',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='senderorder', to=settings.AUTH_USER_MODEL),
        ),
    ]
