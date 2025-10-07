import React, { useEffect, useState } from 'react';
import { getpatient, addpatient, editpatient, deletepatient } from './ApiService';
import AddPatient from './AddPatient';
import EditPatient from './EditPatient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Css/PatientList.css';

const PatientList = () => {
    // -------------------------------
    // 🔹 State Management
    // -------------------------------

    // Stores the list of all patients fetched from the backend API
    const [patients, setPatients] = useState([]);

    // Controls visibility of the Add Patient form component
    const [showAddPatientForm, setShowAddPatientForm] = useState(false);

    // Controls visibility of the Edit Patient form component
    const [showEditPatientForm, setShowEditPatientForm] = useState(false);

    // Holds data of the patient currently being edited
    const [selectedEditData, setSelectedEditData] = useState();

    // -------------------------------
    // 🔹 Fetch Patient Data on Component Mount
    // -------------------------------
    useEffect(() => {
        let mount = true; // Used to avoid updating state after component unmounts

        // Fetch all patient data from the API
        const fetchData = async () => {
            try {
                const data = await getpatient(); // Call API to get data
                if (mount) setPatients(data); // Update local state with response
            } catch (error) {
                console.error("Error fetching patients:", error);
            }
        };

        fetchData(); // Execute fetch when component first renders

        // Cleanup function to prevent memory leaks
        return () => mount = false;
    }, []);

    // -------------------------------
    // 🔹 Handle Add Patient Form Submission
    // -------------------------------
    const handleAddSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        try {
            const res = await addpatient(e.target); // Send form data to backend
            setPatients([...patients, res]); // Add new patient to existing list
            setShowAddPatientForm(false); // Hide Add Form
            toast.success("✅ Patient added successfully!");
        } catch (error) {
            console.error("Error adding patient:", error);
            toast.error("❌ Failed to add patient.");
        }
    };

    // -------------------------------
    // 🔹 Handle Edit Button Click
    // -------------------------------
    const handleEditBtn = (patient) => {
        setSelectedEditData(patient); // Store the selected patient's data
        setShowEditPatientForm(true); // Show Edit Form
        setShowAddPatientForm(false); // Ensure Add Form is closed
    };

    // -------------------------------
    // 🔹 Handle Edit Form Submission
    // -------------------------------
    const handleEditSubmit = async (e, id) => {
        e.preventDefault();

        try {
            const updatedPatient = await editpatient(id, e.target); // Send updated data to API

            // Replace the updated patient in the local state array
            setPatients(patients.map(p => p.patient_id === id ? updatedPatient : p));

            setShowEditPatientForm(false); // Close Edit Form
            toast.success("✅ Patient updated successfully!");
        } catch (error) {
            console.error("Error editing patient:", error);
            toast.error("❌ Failed to update patient.");
        }
    };

    // -------------------------------
    // 🔹 Handle Cancel Button Click (Close Add Form)
    // -------------------------------
    const handleCancelBtn = () => setShowAddPatientForm(false);

    // -------------------------------
    // 🔹 Handle Delete Patient
    // -------------------------------
    const handleDeleteBtn = async (id) => {
        try {
            await deletepatient(id); // Delete record from backend
            // Remove deleted patient from UI list
            setPatients(patients.filter(p => p.patient_id !== id));
            toast.success("🗑️ Patient deleted successfully!");
        } catch (error) {
            console.error("Error deleting patient:", error);
            toast.error("❌ Failed to delete patient.");
        }
    };

    // -------------------------------
    // 🔹 Render Component UI
    // -------------------------------
    return (
        <div className="patient-list-container">
            <h3>Patient List</h3>

            {/* -------------------------------
                🔹 Patient Data Table Section
            --------------------------------*/}
            <div className="table-container">
                <table>
                    {/* -------------------------------
                        🔹 Table Header
                        Contains column labels for displaying patient info and actions
                    --------------------------------*/}
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Blood Group</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {/* -------------------------------
                        🔹 Table Body
                        Dynamically renders rows for each patient using .map()
                    --------------------------------*/}
                    <tbody>
                        {patients.map(patient => (
                            <tr key={patient.patient_id}>
                                {/* Display each patient's data in a row */}
                                <td>{patient.first_name}</td>
                                <td>{patient.last_name}</td>
                                <td>{patient.blood}</td>

                                {/* -------------------------------
                                    🔹 Action Buttons Column
                                    Includes Edit and Delete buttons for each record
                                --------------------------------*/}
                                <td>
                                    {/* Edit Button - Opens Edit Form with selected patient data */}
                                    <button
                                        className="edit"
                                        onClick={() => handleEditBtn(patient)}
                                    >
                                        Edit
                                    </button>

                                    {/* Delete Button - Removes patient record */}
                                    <button
                                        className="delete"
                                        onClick={() => handleDeleteBtn(patient.patient_id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* -------------------------------
                🔹 Add New Patient Button
                Displays AddPatient form when clicked
            --------------------------------*/}
            <button
                className="add-new"
                onClick={() => setShowAddPatientForm(true)}
            >
                Add New Patient
            </button>

            {/* -------------------------------
                🔹 Conditional Rendering for Forms
                Show AddPatient or EditPatient form based on state
            --------------------------------*/}
            {showAddPatientForm && (
                <AddPatient
                    handleAddSubmit={handleAddSubmit}
                    handleCancelBtn={handleCancelBtn}
                />
            )}

            {showEditPatientForm && (
                <EditPatient
                    handleEditSubmit={handleEditSubmit}
                    selectedEditData={selectedEditData}
                />
            )}

            {/* -------------------------------
                🔹 Toast Notification Container
                Displays success or error messages
            --------------------------------*/}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
            />
        </div>
    );
};

export default PatientList;
