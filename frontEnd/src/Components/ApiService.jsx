import axios from "axios";


// Keep the backend base URL in one place so it is easy to update later.

const API_BASE_URL = "http://127.0.0.1:8000";
const PATIENT_ENDPOINT = "/patient/";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});


/**
 * Creates the patient request body from form input fields.
 *
 * This helper keeps add and edit API calls consistent.
 * It assumes the component is passing form fields or refs that contain a `.value`.
 */

const buildPatientPayload = (patient) => ({
  first_name: patient.first_name.value,
  last_name: patient.last_name.value,
  blood: patient.blood.value,
});


/**
 * Handles API errors in one place and keeps error messages consistent.
 */

const handleApiError = (message, error) => {
  console.error(message, error);
  throw error;
};


/**
 * Fetch all patient records from the backend.
 */

export const getpatient = async () => {
  try {
    const response = await apiClient.get(PATIENT_ENDPOINT);
    return response.data;
  } catch (error) {
    handleApiError("Error fetching patient data:", error);
  }
};


/**
 * Add a new patient record.
 */

export const addpatient = async (patient) => {
  try {
    const response = await apiClient.post(
      PATIENT_ENDPOINT,
      buildPatientPayload(patient)
    );

    return response.data;
  } catch (error) {
    handleApiError("Error adding patient:", error);
  }
};


/**
 * Update an existing patient record by ID.
 */

export const editpatient = async (id, patient) => {
  try {
    const response = await apiClient.put(
      `${PATIENT_ENDPOINT}${id}/`,
      buildPatientPayload(patient)
    );

    return response.data;
  } catch (error) {
    handleApiError("Error editing patient:", error);
  }
};


/**
 * Delete a patient record by ID.
 */


export const deletepatient = async (id) => {
  try {
    const response = await apiClient.delete(`${PATIENT_ENDPOINT}${id}/`);
    return response.data;
  } catch (error) {
    handleApiError("Error deleting patient:", error);
  }
};