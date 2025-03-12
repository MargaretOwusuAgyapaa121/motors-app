import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Nav";
import ErrorBoundary from "./Components/Error";
import Homie from "./Pages/Home";
import AboutUs from "./Pages/About";
import LuxuryCars from "./Pages/Garage";


function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Homie />} />
            <Route path="/About" element={<AboutUs />} /> 
            <Route path="/garage"  element={<LuxuryCars/>}/>
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
