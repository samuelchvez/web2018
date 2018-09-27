from django.db import models
from django.contrib.auth.models import User


class Canonera(models.Model):
    brand = models.CharField(max_length=100)
    name = models.CharField(max_length=5)
    borrowed_by = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
