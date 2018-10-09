# -*- coding: utf-8 -*-
from rest_framework import viewsets
from . import models, serializers


class CanoneraModelViewSet(viewsets.ModelViewSet):
    queryset = models.Canonera.objects.all()
    serializer_class = serializers.CanoneraSerializer
