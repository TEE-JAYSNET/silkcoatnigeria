# Generated by Django 5.1.1 on 2025-01-21 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('distributors', '0004_alter_paintbucket_code'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='paintbucket',
            name='code',
        ),
        migrations.AddField(
            model_name='paintbucket',
            name='code_Paint',
            field=models.CharField(default='default value', max_length=20, unique=True),
            preserve_default=False,
        ),
    ]
