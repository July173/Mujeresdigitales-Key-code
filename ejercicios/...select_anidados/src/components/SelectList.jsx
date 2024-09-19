import { useFetch } from "../hooks/useFetch";

export const SelectList = ({ manejadorCambio, title, url }) => {
  
  const Key = `select-${title}`;
  const label = title.toUpperCase(); /**el toUpperCase lo pone todo en mayusculas */
  const { data, error, loading}= useFetch (url);
  
  if(!data){
    return null
  } 
  if(error){
    return (<p> Ha ocurrido un error: {error}</p>)
  }
  
  let options = data 
  
  return (
    < section className="seccion1">
      <label className="labels" htmlFor={Key}>
        {label}
        </label>
      <select className="selects" name={Key} id={Key} onChange={manejadorCambio}>
        <option value="">Seleccione un(a) {title}</option>
      {data && options.map((option)=>(
        <option key={option.id} value={option.id}>{option.name}</option>
      ))}

      

      </select>
    </section>
  );
};
