import { useState } from 'react'
import React from 'react'
import Login from './sign_in'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './sign_in'
import Signup from './sign_up'
import Home from './Home'
import Dashboard from './Dashboard'
import Home1 from './Home1'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/dash" element={<Dashboard/>}></Route>
        <Route path="/home1" element={<Home1/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
