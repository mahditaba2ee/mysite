# Generated by Django 4.0.5 on 2022-06-29 05:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Accounts', '0008_user_is_superuser'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='notifacationmodel',
            name='order',
        ),
        migrations.AddField(
            model_name='notifacationmodel',
            name='text',
            field=models.CharField(max_length=500, null=True),
        ),
    ]