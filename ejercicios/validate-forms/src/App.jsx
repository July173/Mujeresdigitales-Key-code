import { useState } from 'react'
import './App.css'
import ContactForm from './componesnts/contactForm'
import { Loader } from './componesnts/Loader';
function App() {

  return (
    <>
      <h1>Validate forms</h1>
      <div className="card">
       <ContactForm/>
       <Loader/>
      </div>
     
    </>
  )
}

export default App
