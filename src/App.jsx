// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ContactPage from './pages/ContactPage/ContactPage';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="app-container">
      
      <Header/>
      <Routes>
        <Route path='/contactUs' element={<ContactPage/>} /> 
        <Route path='/home' element={<Homepage/>}/>
        {/* why is this showing the contactus if it's in route? */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
