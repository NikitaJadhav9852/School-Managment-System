# Generated by Django 2.1.5 on 2019-01-26 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('rno', models.IntegerField(primary_key=100, serialize=False)),
                ('fname', models.CharField(max_length=100)),
                ('lname', models.CharField(max_length=100)),
                ('sfname', models.CharField(max_length=100)),
                ('smname', models.CharField(max_length=100)),
                ('bdate', models.DateTimeField(auto_now_add=True)),
                ('email', models.CharField(max_length=100)),
                ('pwd', models.CharField(max_length=100)),
                ('gender', models.CharField(max_length=6)),
                ('country', models.CharField(max_length=20)),
                ('city', models.CharField(max_length=20)),
                ('address', models.CharField(max_length=300)),
                ('contactno', models.IntegerField(verbose_name=10)),
            ],
        ),
    ]
