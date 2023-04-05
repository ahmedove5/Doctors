
import './App.css';
import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import Home from "./Component/Home"
import DoctorList from './Component/Services';
import Appointment from "./Component/AppointmentBooking"
import Do from "./Component/DoctorList"
import Foter from "./Component/Footer"
import Moda from './Component/Modal';


function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/d" element={<Do />} />
      <Route path="/f" element={<Appointment />} />



      </Routes>
      
     <Foter/>
       
       
  
  
    </Router>
  );
}

export default App;

