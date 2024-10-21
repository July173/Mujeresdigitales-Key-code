import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Acerca, Error404, Home, Productos, Servicios } from './pages';
import Menu from './components/Menu';
import "./App.css";



function App() {

  return (
    <>
      <BrowserRouter>
        <h1>Hola Mundo React Router Dom</h1>
        <Menu/>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/acerca' element={<Acerca />} />
          {/** Pagina dde prodectos generales */}
          <Route path='/productos' element={<Productos />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='*' element={<Error404 />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
