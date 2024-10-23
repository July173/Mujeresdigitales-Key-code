import { useParams } from "react-router-dom";

export const ServiciosDetalles = ({ servicios }) => {
  /**Busca en la URL el parametro que asigne en la ruta */
  const { id } = useParams();
  /**Crea un flitro buscando el id dentro de los productos totales y me regresa el que encontro */
  const infoServicio = servicios.find(
    /**Compra el id que encontro en la URL contra el id del producto de la lista general, convirtiendolo antes en string */
    (servicio) => servicio.id.toString() === id
  );
  const funcionNavegar = () => {
    navegador(-1);
  };
  return (
    <section>
      <h1>Detalle del servicio</h1>
      <h2>Nombre: ${infoServicio.nombre}</h2>
      <h3>Precio: ${infoServicio.precio}</h3>
    </section>
  );
};

