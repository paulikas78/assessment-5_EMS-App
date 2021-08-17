from rest_framework import serializers
from ems_app.models import *

class AilmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ailment
        fields = ['id', 'name', 'demographics']
        depth = 1

class DemographicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Demographic
        fields = ['age', 'gender', 'ailment', 'zip']     
    ailment = serializers.PrimaryKeyRelatedField(queryset=Ailment.objects.all())