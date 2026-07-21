from django.urls import include, path
from rest_framework import routers
from api.views import PatientViewSet


# DefaultRouter automatically creates standard CRUD routes for the ViewSet.

router = routers.DefaultRouter()
router.register(r"patient", PatientViewSet)


urlpatterns = [
    path("", include(router.urls)),
]