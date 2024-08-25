import React, { useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Components/Home/Home";
import DiseaseDetector from "./Pages/DiseaseDetector";
import ComingSoon from "./Components/UnderConstruction/ComingSoon";
import Sidebar from "./Components/Sidebar/Sidebar";
import AuthPage from "./Pages/Auth/AuthPage";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Determine if the NavBar should be hidden
  const isAuthRoute = location.pathname.startsWith("/auth");

  return (
    <div>
      {!isAuthRoute && <NavBar toggleSidebar={toggleSidebar} />}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="main-content">
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detector" element={<DiseaseDetector />} />
          <Route path="/error" element={<ComingSoon />} />
          <Route path="/error/:page" element={<ComingSoon />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
