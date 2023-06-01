// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ContactPage from './pages/ContactPage/ContactPage';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <BrowserRouter className="app-container">
      
      <Header/>
      <Routes>
        <Route path='/contactus' element={<ContactPage/>} /> 
        <Route path='/' element={<Homepage/>}/>
        <Route path='/details/:productId' element={<ProductDetails/>}/>
        {/* the /: is critical as then it knows a param will be following */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
