# -*- coding: utf-8 -*-
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from . import models, serializers


class CanoneraModelViewSet(viewsets.ModelViewSet):
    queryset = models.Canonera.objects.all()
    serializer_class = serializers.CanoneraSerializer

    @action(methods=['GET'], detail=False, url_path='say-hello')
    def say_hello(self, request):
        return Response({
            'message': "Hola!!"
        })
