import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './sign_in.jsx';
import Signup from './sign_up.jsx';
import Doctor from './components/doctor_module/doctor.jsx';
import Create from './Receptionist/Create';
import Patient from './components/patient_module/patient.jsx';
import AdminDashboard from './components/Admin/dash.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/doctor" element={<Doctor />}></Route>
        <Route path="/nurse" element={<Patient />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path='/admin' element={<AdminDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
