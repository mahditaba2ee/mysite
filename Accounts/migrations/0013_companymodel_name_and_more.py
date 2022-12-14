# Generated by Django 4.0.5 on 2022-07-02 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Accounts', '0012_alter_companymodel_national_card'),
    ]

    operations = [
        migrations.AddField(
            model_name='companymodel',
            name='name',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='companymodel',
            name='business_license',
            field=models.ImageField(upload_to=''),
        ),
        migrations.AlterField(
            model_name='companymodel',
            name='national_card',
            field=models.ImageField(upload_to=''),
        ),
    ]
