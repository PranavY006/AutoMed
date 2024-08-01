import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './sign_in.tsx'
import SignUP  from './sign_up.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={< SignIn/>} />
        <Route path= "/signup" element={< SignUP />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
