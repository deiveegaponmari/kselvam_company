import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AuthLayout from './Layouts/AuthLayout';
import PublicLayout from './Layouts/PublicLayout';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './components/Home';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Equipment from './pages/Equipment';
import Contact from './pages/Contact';
import Bookings from './pages/admin/Bookings';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/register' element={<AuthLayout><Register/></AuthLayout>}></Route>
        <Route path='/login' element={<AuthLayout><Login/></AuthLayout>}></Route>
        <Route path='/' element={<PublicLayout><Home/></PublicLayout>}></Route>
        <Route path='/about' element={<PublicLayout><About/></PublicLayout>}></Route>
        <Route path='/services' element={<PublicLayout><Services/></PublicLayout>}></Route>
        <Route path='/events' element={<PublicLayout><Events/></PublicLayout>}></Route>
        <Route path='/equipments' element={<PublicLayout><Equipment/></PublicLayout>}></Route>
        <Route path='/contact' element={<PublicLayout><Contact/></PublicLayout>}></Route>
        <Route path='/admin/bookings' element={<AuthLayout><Bookings/></AuthLayout>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
