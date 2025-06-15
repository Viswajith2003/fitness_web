import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import Exercise from "./Pages/Exercise";
import Contact from "./Pages/Contacts";
import Bmi from "./Pages/BMI";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
