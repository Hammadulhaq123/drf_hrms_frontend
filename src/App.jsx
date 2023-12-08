import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import asynFunction from "./hoc/Hoc";
import Login from "./employee/pages/authentication/Login";
import EmployeeDashboard from "./employee/pages/dashboard/EmployeeDashboard";

function App() {
  return (
    <Routes>
      {/* Employee App */}
      <Route path="/employee/auth/login/" element={<Login />} />
      <Route path="/employee/dashboard/" element={<EmployeeDashboard />} />

    </Routes>
  );
}

export default App;
