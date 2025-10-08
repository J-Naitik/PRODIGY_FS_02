import React from "react";
import "./EmployeeDetails.css";

const EmployeeDetails = ({ employee, onClose }) => {
  if (!employee) return null; // don’t render if no employee is selected

  return (
    <div className="employee-details">
      <div className="details-card">
        <h2>{employee.name}</h2>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Contact:</strong> {employee.contact}</p>

        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default EmployeeDetails;
