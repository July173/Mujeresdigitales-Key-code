import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Tarjeta from './components/Tarjeta.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tarjeta nombre='July' apellido='Ramos' edad={17} genero= {false} />
    <Tarjeta nombre='Luisa' apellido='Peña' edad={21} genero= {false} />
    <Tarjeta nombre='Jefferson' apellido='Pulido' edad={21} genero />
    <Tarjeta />

    <App />
  </StrictMode>,
)
