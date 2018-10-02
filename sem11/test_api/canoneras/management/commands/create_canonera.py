from django.core.management.base import BaseCommand

from canoneras.models import Canonera


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        print("Cantidad antes:", Canonera.objects.all().count())
        brand = input("Ingrese la marca: ")
        name = input("Ingrese el nombre: ")
        mi_canonera = Canonera(brand=brand, name=name)
        mi_canonera.save()
        print("Cantidad despues:", Canonera.objects.all().count())
