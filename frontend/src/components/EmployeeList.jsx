import React from "react";
import { deleteEmployee } from "../api/employeeApi";
import "./EmployeeList.css";

const EmployeeList = ({ employees, onEdit, fetchEmployees, onSelect, isAdmin }) => {
  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp._id} className="employee-item">
            <div 
              className="employee-info" 
              onClick={() => onSelect(emp)} 
              style={{ cursor: "pointer" }}
            >
              <p>{emp.name}</p>
              <p>{emp.position}</p>
              <p>{emp.email}</p>
            </div>
            {isAdmin && (
              <div className="employee-actions">
                <button onClick={() => onEdit(emp)} className="edit-btn">Edit</button>
                <button onClick={() => handleDelete(emp._id)} className="delete-btn">Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
