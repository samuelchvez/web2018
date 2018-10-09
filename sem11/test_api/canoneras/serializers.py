from rest_framework import serializers
from django.contrib.auth.models import User
from . import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['password']


class CanoneraSerializer(serializers.ModelSerializer):
    borrowed_by = UserSerializer()
    class Meta:
        model = models.Canonera
        exclude = []
        read_only_fields = ['borrowed_by']
