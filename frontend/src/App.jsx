import React, { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeDetails from "./components/EmployeeDetails";
import AdminLogin from "./components/AdminLogin";
import { getEmployees } from "./api/employeeApi";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // track login state

  const fetchEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    if (isAdmin) {
      fetchEmployees();
    }
  }, [isAdmin]);

  if (!isAdmin) {
    return <AdminLogin onLogin={() => setIsAdmin(true)} />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management System</h1>

      {/* Form only for admin */}
      <EmployeeForm
        fetchEmployees={fetchEmployees}
        editingEmployee={editingEmployee}
        setEditingEmployee={setEditingEmployee}
      />

      {/* List with admin privileges */}
      <EmployeeList
        employees={employees}
        onEdit={setEditingEmployee}
        fetchEmployees={fetchEmployees}
        onSelect={setSelectedEmployee}
        isAdmin={isAdmin}
      />

      <EmployeeDetails
        employee={selectedEmployee}
        onClose={() => setSelectedEmployee(null)}
      />
    </div>
  );
};

export default App;
