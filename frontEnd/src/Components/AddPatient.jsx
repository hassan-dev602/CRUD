import React from 'react';
import '../Css/AddPatient.css';


const AddPatient = ({ handleAddSubmit, handleCancelBtn }) => {
  return (
    <div className="form-container">
      <h3>Add New Patient</h3>
      <form onSubmit={handleAddSubmit} className="patient-form">
        <label>
          First Name
          <input type='text' name='first_name' placeholder='Enter First Name' required />
        </label>

        <label>
          Last Name
          <input type='text' name='last_name' placeholder='Enter Last Name' required />
        </label>

        <label>
          Blood Group
          <input type='text' name='blood' placeholder='Enter Blood Group' required />
        </label>

        <div className="form-buttons">
          <button type='submit' className="submit-btn">Add</button>
          <button type='button' className="cancel-btn" onClick={handleCancelBtn}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddPatient;
