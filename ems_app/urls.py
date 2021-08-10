from django.urls import path, include
from ems_app.views import * # This library gives us all of the functions usually found in views.py
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('ailments', AilmentViewSet, basename='ailment')
router.register('demographics', DemographicViewSet, basename='demographic')

urlpatterns = router.urls