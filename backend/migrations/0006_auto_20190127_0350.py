# Generated by Django 2.1.5 on 2019-01-27 03:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_auto_20190127_0350'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='contactno',
            field=models.IntegerField(verbose_name=10),
        ),
    ]
