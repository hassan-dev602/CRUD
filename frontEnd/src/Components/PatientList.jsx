import React, { useEffect, useState } from 'react';
import { getpatient, addpatient, editpatient, deletepatient } from './ApiService';
import AddPatient from './AddPatient';
import EditPatient from './EditPatient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Css/PatientList.css';


const PatientList = () => {
    const [patients, setPatients] = useState([]);
    const [showAddPatientForm, setShowAddPatientForm] = useState(false);
    const [showEditPatientForm, setShowEditPatientForm] = useState(false);
    const [selectedEditData, setSelectedEditData] = useState();

    useEffect(() => {
        let mount = true;
        const fetchData = async () => {
            try {
                const data = await getpatient();
                if (mount) setPatients(data);
            } catch (error) {
                console.error("Error fetching patients:", error);
            }
        };
        fetchData();
        return () => mount = false;
    }, []);

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await addpatient(e.target);
            setPatients([...patients, res]);
            setShowAddPatientForm(false);
            toast.success("Patient added successfully!");
        } catch (error) {
            console.error("Error adding patient:", error);
            toast.error("Failed to add patient.");
        }
    };

    const handleEditBtn = (patient) => {
        setSelectedEditData(patient);
        setShowEditPatientForm(true);
        setShowAddPatientForm(false);
    };

    const handleEditSubmit = async (e, id) => {
        e.preventDefault();
        try {
            const updatedPatient = await editpatient(id, e.target);
            setPatients(patients.map(p => p.patient_id === id ? updatedPatient : p));
            setShowEditPatientForm(false);
            toast.success("Patient updated successfully!");
        } catch (error) {
            console.error("Error editing patient:", error);
            toast.error("Failed to update patient.");
        }
    };

    const handleCancelBtn = () => setShowAddPatientForm(false);

    const handleDeleteBtn = async (id) => {
        try {
            await deletepatient(id);
            setPatients(patients.filter(p => p.patient_id !== id));
            toast.success("Patient deleted successfully!");
        } catch (error) {
            console.error("Error deleting patient:", error);
            toast.error("Failed to delete patient.");
        }
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
                        {patients.map(patient => (
                            <tr key={patient.patient_id}>
                                <td>{patient.first_name}</td>
                                <td>{patient.last_name}</td>
                                <td>{patient.blood}</td>
                                <td>
                                    <button className="edit" onClick={() => handleEditBtn(patient)}>Edit</button>
                                    <button className="delete" onClick={() => handleDeleteBtn(patient.patient_id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button className="add-new" onClick={() => setShowAddPatientForm(true)}>Add New Patient</button>

            {showAddPatientForm && (
                <AddPatient handleAddSubmit={handleAddSubmit} handleCancelBtn={handleCancelBtn} />
            )}

            {showEditPatientForm && (
                <EditPatient handleEditSubmit={handleEditSubmit} selectedEditData={selectedEditData} />
            )}

            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default PatientList;
