# Generated by Django 2.1.5 on 2019-01-26 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='bdate',
            field=models.CharField(max_length=100),
        ),
    ]
