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
        depth = 1





# name / age, gender, ailment






# from rest_framework.serializers import ModelSerializer, StringRelatedField, SerializerMethodField, PrimaryKeyRelatedField
# from to_do_list_app.models import *

# class TaskListSerializer(ModelSerializer):
#     class Meta:
#         model = TaskList
#         fields = ['id', 'name', 'user', 'tasks']
#         depth = 1
        
#     user = StringRelatedField(read_only=True)
#     user = PrimaryKeyRelatedField(write_only=True, queryset=User.objects.all())

        
# class TaskSerializer(ModelSerializer):
#     class Meta:
#         model = Task
#         fields = ['list', 'name', 'completed', 'due_date']
#         depth = 1
        