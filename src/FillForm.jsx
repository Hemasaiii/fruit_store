import React, { useState } from "react";
import "./App.css"; // Importing CSS
function InputField({ label, type, name, value, onChange }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function CheckboxField({ label, name, checked, onChange }) {
  return (
    <div className="form-group">
      <label>
        <input
          className="form-checkbox"
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
}

function FillForm()
{
  // call the InputField() and CheckboxField()
	// initializing the form data using useState Hook  
	const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    isChecked: false,
  });



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `First Name: ${formData.firstName}, Last Name: ${formData.lastName}, Agree: ${formData.isChecked}`
    );
  };

return (
    <div className="form-container">
      <h1 className="form-title">Personal Details Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <InputField
          label="Enter First Name: "
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          label="Enter Last Name: "
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <CheckboxField
          label="I agree to the terms and conditions"
          name="isChecked"
          checked={formData.isChecked}
          onChange={handleChange}
        />
        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FillForm;