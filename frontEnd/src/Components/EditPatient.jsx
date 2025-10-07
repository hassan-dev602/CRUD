import React from 'react';
import '../Css/EditPatient.css';

/**
 * EditPatient Component
 * ----------------------
 * This component renders a form to edit an existing patient's details.
 * It receives the selected patient's data as props and pre-fills the form fields.
 * When submitted, it triggers the `handleEditSubmit` function passed from the parent.
 */

const EditPatient = ({ handleEditSubmit, selectedEditData }) => {

  // -------------------------------
  // 🔹 Conditional Rendering
  // If no patient data is selected, do not render the form
  // -------------------------------
  if (!selectedEditData) return null;

  // -------------------------------
  // 🔹 Render Edit Form
  // -------------------------------
  return (
    <div className="form-container">
      <h3>Edit Patient</h3>

      {/* 
        Form for editing patient data
        - onSubmit triggers `handleEditSubmit` (passed as a prop)
        - sends event and selected patient's ID
      */}
      <form
        onSubmit={(e) => handleEditSubmit(e, selectedEditData.patient_id)}
        className="patient-form"
      >
        {/* -------------------------------
            🔹 Input Field: First Name
            Pre-filled with the selected patient's first name
        --------------------------------*/}
        <label>
          First Name
          <input
            type='text'
            name='first_name'
            defaultValue={selectedEditData.first_name}
            required
          />
        </label>

        {/* -------------------------------
            🔹 Input Field: Last Name
            Pre-filled with the selected patient's last name
        --------------------------------*/}
        <label>
          Last Name
          <input
            type='text'
            name='last_name'
            defaultValue={selectedEditData.last_name}
            required
          />
        </label>

        {/* -------------------------------
            🔹 Input Field: Blood Group
            Pre-filled with the selected patient's blood group
        --------------------------------*/}
        <label>
          Blood Group
          <input
            type='text'
            name='blood'
            defaultValue={selectedEditData.blood}
            required
          />
        </label>

        {/* -------------------------------
            🔹 Form Buttons Section
            Contains submit button for updating patient data
        --------------------------------*/}
        <div className="form-buttons">
          <button type='submit' className="submit-btn">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditPatient;
