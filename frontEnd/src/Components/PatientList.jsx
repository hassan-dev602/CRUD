import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { addpatient, deletepatient, editpatient, getpatient } from "./ApiService";
import AddPatient from "./AddPatient";
import EditPatient from "./EditPatient";

import "react-toastify/dist/ReactToastify.css";
import "../Css/PatientList.css";


const PatientList = () => {
  // Stores all patient records fetched from the backend.
  const [patients, setPatients] = useState([]);

  // Shows loading text while the API request is in progress.
  const [isLoading, setIsLoading] = useState(false);

  // Controls whether AddPatient form should be visible.
  const [showAddPatientForm, setShowAddPatientForm] = useState(false);

  // Controls whether EditPatient form should be visible.
  const [showEditPatientForm, setShowEditPatientForm] = useState(false);

  // Stores the patient selected for editing.
  const [selectedEditData, setSelectedEditData] = useState(null);

  /**
   * Fetch all patients when the component loads for the first time.
   *
   * The isMounted flag prevents React from updating state after the component
   * is unmounted, which can happen if the API response comes back late.
   */
  useEffect(() => {
    let isMounted = true;

    const fetchPatients = async () => {
      setIsLoading(true);

      try {
        const data = await getpatient();

        if (isMounted) {
          setPatients(data);
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
        toast.error("Failed to load patients.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchPatients();

    return () => {
      isMounted = false;
    };
  }, []);

  /**
   * Handles Add Patient form submission.
   * Sends form data to the backend and updates the UI with the new patient.
   */
  const handleAddSubmit = async (event) => {
    event.preventDefault();

    try {
      const newPatient = await addpatient(event.target);

      // Use functional state update to avoid stale state issues.
      setPatients((currentPatients) => [...currentPatients, newPatient]);

      setShowAddPatientForm(false);
      toast.success("Patient added successfully!");
    } catch (error) {
      console.error("Error adding patient:", error);
      toast.error("Failed to add patient.");
    }
  };

  /**
   * Opens the edit form and stores the selected patient data.
   * The add form is closed so both forms are not shown together.
   */
  const handleEditBtn = (patient) => {
    setSelectedEditData(patient);
    setShowEditPatientForm(true);
    setShowAddPatientForm(false);
  };

  /**
   * Handles Edit Patient form submission.
   * Updates the selected patient in the backend and then updates it in local state.
   */
  const handleEditSubmit = async (event, patientId) => {
    event.preventDefault();

    try {
      const updatedPatient = await editpatient(patientId, event.target);

      // Replace only the updated patient while keeping the rest of the list unchanged.
      setPatients((currentPatients) =>
        currentPatients.map((patient) =>
          patient.patient_id === patientId ? updatedPatient : patient
        )
      );

      setShowEditPatientForm(false);
      setSelectedEditData(null);

      toast.success("Patient updated successfully!");
    } catch (error) {
      console.error("Error editing patient:", error);
      toast.error("Failed to update patient.");
    }
  };

  /**
   * Deletes a patient from the backend first.
   * After successful deletion, the patient is removed from the table.
   */
  const handleDeleteBtn = async (patientId) => {
    try {
      await deletepatient(patientId);

      setPatients((currentPatients) =>
        currentPatients.filter((patient) => patient.patient_id !== patientId)
      );

      toast.success("Patient deleted successfully!");
    } catch (error) {
      console.error("Error deleting patient:", error);
      toast.error("Failed to delete patient.");
    }
  };

  /**
   * Opens the Add Patient form and closes the Edit Patient form.
   */
  const handleAddNewBtn = () => {
    setShowAddPatientForm(true);
    setShowEditPatientForm(false);
    setSelectedEditData(null);
  };

  /**
   * Closes the Add Patient form when the user clicks Cancel.
   */
  const handleCancelBtn = () => {
    setShowAddPatientForm(false);
  };

  return (
    <div className="patient-list-container">
      <h3>Patient List</h3>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Blood Group</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="4">Loading patients...</td>
              </tr>
            ) : patients.length > 0 ? (
              patients.map((patient) => (
                <tr key={patient.patient_id}>
                  <td>{patient.first_name}</td>
                  <td>{patient.last_name}</td>
                  <td>{patient.blood}</td>
                  <td>
                    <button
                      type="button"
                      className="edit"
                      onClick={() => handleEditBtn(patient)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="delete"
                      onClick={() => handleDeleteBtn(patient.patient_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No patients found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button type="button" className="add-new" onClick={handleAddNewBtn}>
        Add New Patient
      </button>

      {/* Show AddPatient form only when the user clicks Add New Patient. */}
      {showAddPatientForm && (
        <AddPatient
          handleAddSubmit={handleAddSubmit}
          handleCancelBtn={handleCancelBtn}
        />
      )}

      {/* Show EditPatient form only when a patient is selected for editing. */}
      {showEditPatientForm && (
        <EditPatient
          handleEditSubmit={handleEditSubmit}
          selectedEditData={selectedEditData}
        />
      )}

      {/* ToastContainer is required for showing success and error notifications. */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default PatientList;