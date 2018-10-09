""" . """
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from canoneras import views as canoneras_views


# Router creation
router = DefaultRouter()

# Client
router.register(
    r'canoneras',
    canoneras_views.CanoneraModelViewSet
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls))
]
