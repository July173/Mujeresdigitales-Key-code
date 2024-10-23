import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const Servicios = () => {
  return (
    <div>
      <h2>Servicios</h2>
      <nav className='menu'>
      <Link
        to={"/servicios"}
      >
        {" "}
       Inicio servicios
      </Link>
      <Link
        to={"/servicios/garantia"}
      >
        {" "}
       Servicios Garantias
      </Link>
      <Link
        to={"/servicios/lista"}
      >
        {" "}
       Lista de servicios
      </Link>
     

      </nav>
      <Outlet/>
    </div>
  )
}