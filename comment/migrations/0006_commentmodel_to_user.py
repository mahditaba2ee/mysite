# Generated by Django 4.0.5 on 2022-07-11 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comment', '0005_replaycommentmodel_view'),
    ]

    operations = [
        migrations.AddField(
            model_name='commentmodel',
            name='to_user',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
