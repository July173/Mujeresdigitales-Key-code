import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/"}
      >
        {" "}
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/acerca"}
      >
        {" "}
        Acerca
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/productos"}
      >
        {" "}
        Productos{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/servicios"}
      >
        {" "}
        Servicios
      </NavLink>
    </nav>
  );
};

export default Menu;
