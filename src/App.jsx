import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Box } from "@mui/material";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Exercise from "./Pages/Exercise";
import BMI from "./Pages/BMI.jsx";
import Contacts from "./Pages/Contacts.jsx";


function App() {
  return (
    <div>
      <Home />
      {/* <Exercise /> */}
    </div>
    // <Router>
    //   <div>
    //     {/* <Navbar />
    //     <Home/>
    //     <Exercise/> */}
    //     {/* <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/exercise" element={<Exercise />} />
    //       <Route path="/bmi" element={<BMI />} />
    //       <Route path="/contacts" element={<Contacts />} />
    //     </Routes> */}
    //   </div>
    // </Router>
  );
}

export default App;
