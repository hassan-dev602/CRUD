from rest_framework import viewsets

from api.models import Patient
from api.serializers import PatientSerializer


class PatientViewSet(viewsets.ModelViewSet):
    
    """
    Provides CRUD API endpoints for Patient records.

    ModelViewSet automatically handles common API actions such as:
    list, create, retrieve, update, partial_update, and destroy.
    """

    queryset = Patient.objects.all()
    serializer_class = PatientSerializer