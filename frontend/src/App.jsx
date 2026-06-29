import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import TeacherDashboard from "./pages/TeacherDashboard";
import Quotes from './pages/Quotes';

const App = () => {
  // Authentication check
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Login Route: Agar login hai toh Dashboard par bhejo */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/teacher-dashboard" /> : <LoginPage />} />
        
        {/* Dashboard Route: Agar login nahi hai toh Login page par bhejo */}
        <Route path="/teacher-dashboard" element={isAuthenticated ? <TeacherDashboard /> : <Navigate to="/login" />} />
        
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
};

export default App;