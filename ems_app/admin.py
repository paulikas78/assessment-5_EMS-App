from django.contrib import admin
from .models import Ailment, Demographic

# Register your models here.

admin.site.register([Ailment, Demographic])

