# Generated by Django 4.1 on 2022-08-26 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0024_typeproductmodel_productmodel_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brandmodel',
            name='slug',
            field=models.SlugField(allow_unicode=True, max_length=100, unique=True, verbose_name='آدرس لینک'),
        ),
    ]
