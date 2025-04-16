import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Nav";
import ErrorBoundary from "./Components/Error";
import Homie from "./Pages/Home";
import AboutUs from "./Pages/About";
import LuxuryCars from "./Pages/Garage";
import Form from "./Pages/Contacts"
import TeamPage from "./Pages/Team";


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
            <Route path="/contact" element={<Form/>}/>
            <Route path="/Team"  element={<TeamPage/>}/>
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
