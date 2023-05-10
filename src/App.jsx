import { useState } from 'react'
import './App.css'
import Header from './Header'
import Welcome from './Welcome'

function App() {


  return (
    <div>
      <Header />
      Hello React
      <Welcome username="Anca" color="red"/>
      <Welcome username="Kristina" />
    </div>
  )
}

export default App
