import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Acerca, Error404, Home, Productos, Servicios } from './pages'



function App() {

  return (
    <>
      <BrowserRouter>
        <h1>Hola Mundo React Router Dom</h1>

        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/produdctos' element={<Productos />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='*' element={<Error404 />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
