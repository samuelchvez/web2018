from django.db import models
from django.contrib.auth.models import User


class Canonera(models.Model):
    brand = models.CharField(max_length=100)
    name = models.CharField(max_length=5)
    borrowed_by = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)

'''
Mini clase de REST:
- HTTP
- JSON
- API
- REST

Verbos: GET, POST, PUT, PATCH, DELETE, OPTIONS

https://api.instructure.com/uvg/v1/ ...

OPTIONS: /students/16011/
in: ""
out: "GET, PUT, PATCH, DELETE"

GET: /students/16011/
in: ""
out: "{\"id\":16011, \"name\": \"Christian\"}"

GET: /students/
in: ""
out: "[{\"id\":16011, \"name\": \"Christian\"}, {\"id\":16012, \"name\": \"Christian2\"}]"

POST: /students/
in: "{\"name\": \"Samuel\"}"
out: "{\"id\":07351, \"name\": \"Samuel\", \"created_at\": 4134242334}"

PATCH: /students/16011/
in: "{\"name\": \"Christiano Ronaldo\"}"
out: "{\"id\":07351, \"name\": \"Samuel\", \"created_at\": 4134242334}"

PUT: /students/16011/
in: "{\"id\":07351, \"name\": \"Christiano Ronaldo\"}"
out: "{\"id\":07351, \"name\": \"Samuel\", \"created_at\": 4134242334}"

DELETE: /students/16011/
in: ""
out: "{\"id\":07351, \"name\": \"Samuel\", \"created_at\": 4134242334}"

GET: /students/?level__name="Primero"
in: ""
out: "[{\"id\":16011, \"name\": \"Christian\"}, {\"id\":16012, \"name\": \"Christian2\"}]"

'''
