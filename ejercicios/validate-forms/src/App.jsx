import { useState } from 'react'
import './App.css'
import ContactForm from './componesnts/ContactForm';
function App() {

  return (
    <>
      <header className='h-48 p-4 text-4xl font-bold text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
        <p className='mt-5'>  Validate forms</p>
      
        </header>
      <div className="card">
       <ContactForm/>
      </div>
     
    </>
  )
}

export default App
