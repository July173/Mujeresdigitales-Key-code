import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
      <NavLink to={"/"}> Home</NavLink>
      <NavLink to={"/acerca"}> Acerca</NavLink>
      <NavLink to={"/productos"}> Productos </NavLink>
      <NavLink to={"/servicios"}> Servicios</NavLink>

    </nav>
  )
}

export default Menu
