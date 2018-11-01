# -*- coding: utf-8 -*-
from rest_framework import viewsets
from rest_framework.permissions import BasePermission
from rest_framework.decorators import action
from rest_framework.response import Response

from . import models, serializers


class CanonerasPermissions(BasePermission):
    def has_permission(self, request, view):
        if view.action == 'create':
            return user.has_permission('canoneras.add_canonera')
        elif view.action == 'list':
            return True
        return False

    def has_object_permission(self, request, view, obj):
        user = request.user
        if view.action == 'retrieve':
            return user.has_permission('canoneras.view_canonera') or user == obj.borrowed_by
        elif view.action == 'destroy':
            return user.has_permission('canoneras.remove_canonera')
        elif view.action == 'partial_update':
            return user.has_permission('canoneras.change_canonera', obj) or user.has_permission('canoneras.change_canonera')
        elif view.action == 'send_reminder':

        return False



class CanoneraModelViewSet(viewsets.ModelViewSet):
    permission_classes = (CanonerasPermissions, )
    queryset = models.Canonera.objects.all()
    serializer_class = serializers.CanoneraSerializer

    @action(methods=['POST'], detail=True, url_path='send-reminder')
    def send_reminder(self, request):
        canonera = self.get_object()
        # remind_at = request.POST.get('at', timezone.now())

        if canonera.borrowed_by:
            # email = canonera.borrowed_by.email
            # send_reminder_email(email, remind_at)
            pass

        return Response({
            'message': "Correo enviado exitosamente a {}".format(email)
        })
