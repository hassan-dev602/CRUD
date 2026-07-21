from django.contrib import admin

from api.models import Patient


@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    
    """
    Customizes how Patient records are displayed and searched in Django admin.
    This helps admins quickly find and review patient information.
    """

    list_display = ("patient_id", "first_name", "last_name", "blood")
    search_fields = ("first_name", "last_name", "blood")
    list_filter = ("blood",)