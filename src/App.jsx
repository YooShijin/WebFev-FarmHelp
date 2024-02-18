import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Components/Home/Home";
import DiseaseDetector from "./Pages/DiseaseDetector";
import ComingSoon from "./Components/UnderConstruction/ComingSoon";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/detector"
            element={<DiseaseDetector></DiseaseDetector>}
          ></Route>
          <Route
            path="/error"
            exact
            element={<ComingSoon></ComingSoon>}
          ></Route>

          <Route
            path="/error/:page"
            element={<ComingSoon></ComingSoon>}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
