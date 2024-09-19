import { useState } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  const [departamentos, setDepartamentos] = useState("");
  const [ciudades, setCiudades] = useState("");
  const [informacion, setInformacion] = useState(null);
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
      
      <div className="Informacion" > 
    <h3>Informacion de la ciudad</h3>
    
    <div url={`https://api-colombia.com/api/v1/Department/${ciudades}`} ></div>
      </div>
    </>
  );
};
