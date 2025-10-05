import React from 'react';
import '../Css/EditPatient.css';



const EditPatient = ({ handleEditSubmit, selectedEditData }) => {
  if (!selectedEditData) return null;

  return (
    <div className="form-container">
      <h3>Edit Patient</h3>
      <form onSubmit={(e) => handleEditSubmit(e, selectedEditData.patient_id)} className="patient-form">
        <label>
          First Name
          <input type='text' name='first_name' defaultValue={selectedEditData.first_name} required />
        </label>

        <label>
          Last Name
          <input type='text' name='last_name' defaultValue={selectedEditData.last_name} required />
        </label>

        <label>
          Blood Group
          <input type='text' name='blood' defaultValue={selectedEditData.blood} required />
        </label>

        <div className="form-buttons">
          <button type='submit' className="submit-btn">Update</button>
        </div>
      </form>
    </div>
  );
}

export default EditPatient;
