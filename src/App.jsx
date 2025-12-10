import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AuthLayout from './Layouts/AuthLayout';
import PublicLayout from './Layouts/PublicLayout';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './components/Home';
import About from './components/About';
import Services from './components/ServicesCard';
import Events from './components/EventsCard';
import Equipment from './components/EquipmentCard';
import Contact from './components/Contact';
function App() {
  const [count, setCount] = useState(0)

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
      </Routes>
    </Router>
    </>
  )
}

export default App
