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





# from django.shortcuts import render
# from rest_framework.viewsets import ModelViewSet
# from to_do_list_app.serializers import *
# from to_do_list_app.models import *

# class TaskListViewSet(ModelViewSet):
#     queryset = TaskList.objects.all()
#     serializer_class = TaskListSerializer
    
#     def get_query(self):
#         return TaskList.objects.filter(user=self.request.user)
    
# class TaskViewSet(ModelViewSet):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer
