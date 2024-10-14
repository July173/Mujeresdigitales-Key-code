import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Welcome from './components/welcome'
import Servicios from './components/servicios'

function App() {

  return (
    <>
     <Navbar/>
     <Welcome/>
     <Servicios/>
    </>
  )
}

export default App
