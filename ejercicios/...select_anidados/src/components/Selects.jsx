import { useEffect, useState } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  const [departamentos, setDepartamentos] = useState("");
  const [ciudades, setCiudades] = useState("");
  const [informacion, setInformacion] = useState(null);

  useEffect(() => {
    if (ciudades) {
      fetch(`https://api-colombia.com/api/v1/City/${ciudades}`)
        .then((response) => {
          if (!response.ok) {
            console.log("error en la respuesta");
          }
          return response.json();
        })
        .then((data) => setInformacion(data))
        .catch((error) =>
          console.error("Error al obtener la informacion de la ciudad:", error)
        );
    }
  }, [ciudades, departamentos]);

  return (
    <>
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => {
          setDepartamentos(event.target.value);
        }}
      />
      <SelectList
        title="Ciudad"
        url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
        manejadorCambio={(event) => {
          setCiudades(event.target.value);
        }}
      />
      {informacion && (
        <div className="Informacion"  >
          <h3>Informacion de la ciudad</h3>
          <p>
            <strong>Nombre:</strong> {informacion.name ?? "No hay informacion"}
          </p>
          <p>
            <strong>Poblacion:</strong> {informacion.population ?? "no hay informacion"}
          </p>
          <p>
            <strong>Codigo postal:</strong> {informacion.postalCode ?? "No hay informacion"}
          </p>
        </div>
      )}
    </>
  );
};
