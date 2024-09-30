import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './sign_in.jsx';
import Signup from './sign_up.jsx';
import Doctor from './components/doctor_module/doctor.jsx';
import Nurse from './Nurse.jsx';
import User from './Receptionist/User';
import Create from './Receptionist/Create';
import Update from './Receptionist/Update';
import Patient from './components/patient_module/patient.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/doctor" element={<Doctor />}></Route>
        <Route path="/user" element={<Patient />}></Route>
        <Route path="/nurse" element={<Nurse />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/upadte/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
