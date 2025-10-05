import React from 'react'
import axios from "axios";


// Function For Getting Data  From api

export const getpatient = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:8000/patient/');
    return res.data;
  } catch (error) {
    console.error("Error fetching patient data:", error);
    throw error; 
  }
};




// Function For Adding Data  

export const addpatient = async (patient) => {
  try {
    const res = await axios.post('http://127.0.0.1:8000/patient/', {
      patient_id: null,
      first_name: patient.first_name.value,
      last_name: patient.last_name.value,
      blood: patient.blood.value,
    });
    return res.data;
  } catch (error) {
    console.error("Error adding patient:", error);
    throw error; 
  }
};

// Function For Editing Data

export const editpatient = async (id, patient) => {
  try {
    const res = await axios.put(`http://127.0.0.1:8000/patient/${id}/`, {
      first_name: patient.first_name.value,
      last_name: patient.last_name.value,
      blood: patient.blood.value,
    });
    return res.data;
  } catch (error) {
    console.error("Error editing patient:", error);
    throw error; 
  }
};



// Function For Deleting Data


export const deletepatient = async (id) => {
  try {
    const res = await axios.delete(`http://127.0.0.1:8000/patient/${id}/`);
    return res.data;
  } catch (error) {
    console.error("Error deleting patient:", error);
    throw error;
  }
};



