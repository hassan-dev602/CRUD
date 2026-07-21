from django.db import models


class Patient(models.Model):
    
    """
    Stores basic information about a patient.

    This model can be used to keep patient identity details and blood group/type
    information for hospital, clinic, or healthcare-related systems.
    """

    patient_id = models.BigAutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    blood = models.CharField(max_length=50)

    def __str__(self):
        """
        Return a readable patient name for Django admin and debugging.
        """
        return f"{self.first_name} {self.last_name}"