# Generated by Django 4.1 on 2022-09-02 07:27

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0033_alter_productmodel_star'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productmodel',
            name='star',
            field=jsonfield.fields.JSONField(null=True),
        ),
    ]
