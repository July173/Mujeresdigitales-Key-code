import { useParams, useNavigate } from "react-router-dom";

export const ProductoDetalle = ({ productos }) => {
  /**Uso lo que importe para navegar a algun sitio */
  const navegador = useNavigate();
  /**Busca en la URL el parametro que asigne en la ruta */
  const { id } = useParams();
  /**Crea un flitro buscando el id dentro de los productos totales y me regresa el que encontro */
  const infoProducto = productos.find(
    /**Compra el id que encontro en la URL contra el id del producto de la lista general, convirtiendolo antes en string */
    (producto) => producto.id.toString() === id
  );
  const funcionNavegar = () => {
    navegador(-1);
  };
  return (
    <section>
      <h1>Detalle producto</h1>
      <h2>Nombre: ${infoProducto.nombre}</h2>
      <h3>Precio: ${infoProducto.precio}</h3>
      <button onClick={funcionNavegar}>Regresar</button>
    </section>
  );
};
