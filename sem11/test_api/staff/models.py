from django.db import models

class Teacher(models.Model):
    name = models.CharField(max_length=200)
    code = models.CharField(max_length=200)
    area = models.CharField(max_length=200)


class Administrator(models.Model):
    name = models.CharField(max_length=200)
    office = models.CharField(max_length=200)
    position = models.CharField(max_length=200)

