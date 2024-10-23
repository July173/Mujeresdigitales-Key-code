import React from 'react'
import { Link } from 'react-router-dom'


export const ServiciosLista = ({ servicios }) => {
    return (
        <div>
            <h1>Servicios lista</h1>
            <ul>
                {servicios.map((servicio) => (
                    <li key={servicio.id}>
                        <Link to={`/servicios/${servicio.id}`}>{servicio.nombre} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}


