from django.shortcuts import render
from rest_framework import viewsets
from ems_app.serializers import *
from ems_app.models import *


class AilmentViewSet(viewsets.ModelViewSet):
    queryset = Ailment.objects.all()
    serializer_class = AilmentSerializer

class DemographicViewSet(viewsets.ModelViewSet):
    queryset = Demographic.objects.all()
    serializer_class = DemographicSerializer