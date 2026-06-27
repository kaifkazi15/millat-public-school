import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import TeacherDashboard from "./pages/TeacherDashboard";

const App = () => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/teacher-dashboard" /> : <LoginPage />} />
        <Route path="/teacher-dashboard" element={isAuthenticated ? <TeacherDashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;