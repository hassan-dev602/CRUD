import React from 'react';
import '../Css/AddPatient.css';

/**
 * AddPatient Component
 * ----------------------
 * This component renders a form for adding a new patient.
 * It receives two functions as props:
 *  - `handleAddSubmit`: handles form submission and sends new patient data to the backend.
 *  - `handleCancelBtn`: closes or hides the Add Patient form.
 */

const AddPatient = ({ handleAddSubmit, handleCancelBtn }) => {
  return (
    <div className="form-container">
      <h3>Add New Patient</h3>

      {/* 
        Patient Add Form
        - When submitted, triggers `handleAddSubmit` (from parent component)
        - Contains inputs for first name, last name, and blood group
      */}
      <form onSubmit={handleAddSubmit} className="patient-form">

        {/* -------------------------------
            🔹 Input Field: First Name
            User enters the patient's first name
        --------------------------------*/}
        <label>
          First Name
          <input
            type='text'
            name='first_name'
            placeholder='Enter First Name'
            required
          />
        </label>

        {/* -------------------------------
            🔹 Input Field: Last Name
            User enters the patient's last name
        --------------------------------*/}
        <label>
          Last Name
          <input
            type='text'
            name='last_name'
            placeholder='Enter Last Name'
            required
          />
        </label>

        {/* -------------------------------
            🔹 Input Field: Blood Group
            User enters the patient's blood group (e.g., A+, O-, etc.)
        --------------------------------*/}
        <label>
          Blood Group
          <input
            type='text'
            name='blood'
            placeholder='Enter Blood Group'
            required
          />
        </label>

        {/* -------------------------------
            🔹 Form Buttons Section
            - "Add" button submits the form and calls handleAddSubmit()
            - "Cancel" button closes the Add Patient form using handleCancelBtn()
        --------------------------------*/}
        <div className="form-buttons">
          <button type='submit' className="submit-btn">Add</button>
          <button
            type='button'
            className="cancel-btn"
            onClick={handleCancelBtn}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
