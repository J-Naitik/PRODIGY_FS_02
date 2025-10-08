import React, { useState, useEffect } from "react";
import { createEmployee, updateEmployee } from "../api/employeeApi";
import "./EmployeeForm.css";

const EmployeeForm = ({ fetchEmployees, editingEmployee, setEditingEmployee }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    contact: "",
  });

  useEffect(() => {
    if (editingEmployee) setForm(editingEmployee);
  }, [editingEmployee]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingEmployee) {
      await updateEmployee(editingEmployee._id, form);
      setEditingEmployee(null);
    } else {
      await createEmployee(form);
    }
    setForm({ name: "", email: "", position: "", department: "", contact: "" });
    fetchEmployees();
  };

  return (
    <div className="form-container">
      <h2>{editingEmployee ? "Edit Employee" : "Add Employee"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="position"
          placeholder="Position"
          value={form.position}
          onChange={handleChange}
          required
        />
        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
        />
        <input
          name="contact"
          placeholder="Contact"
          value={form.contact}
          onChange={handleChange}
        />

        <div className="form-actions">
          {editingEmployee && (
            <button
              type="button"
              onClick={() => setEditingEmployee(null)}
              className="btn btn-cancel"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className={`btn ${
              editingEmployee ? "btn-update" : "btn-add"
            }`}
          >
            {editingEmployee ? "Update" : "Add"} Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
