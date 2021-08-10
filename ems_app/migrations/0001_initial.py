# Generated by Django 3.2.6 on 2021-08-09 21:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ailment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Demographic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.CharField(max_length=3)),
                ('gender', models.CharField(max_length=2)),
                ('ailment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='demographics', to='ems_app.ailment')),
            ],
        ),
    ]
