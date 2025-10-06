import React, { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import { getEmployees } from "./api/employeeApi";

const App = () => {
  const [editingEmployee, setEditingEmployee] = useState(null);

  const fetchEmployees = async () => {
    await getEmployees();
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeForm
        fetchEmployees={fetchEmployees}
        editingEmployee={editingEmployee}
        setEditingEmployee={setEditingEmployee}
      />
      <EmployeeList onEdit={setEditingEmployee} />
    </div>
  );
};

export default App;
