import { useState } from "react";

export const useForms = (valorDefecto, validaciones) => {
  const [form, setForm] = useState(valorDefecto);

  const [errores, setErrores] = useState({});

  const [cargando, setCargando] = useState(false);
  
  const [bd, setBd] = useState();

  const [respuesta, setRespuesta] = useState(false);

  const manejadorCambios = (element) => {
    const { name, value } = element.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  //funcion que envia la data(form) del formulario
  const manejadorSalidaInput = (element) => {
    manejadorCambios(element);
    setErrores(validaciones(form));
  };

  
 const enviarFormulario = (element) => {
    element.preventDefault();
    setErrores(validaciones(form))

      if(Object.keys(errores).length === 0){
        setCargando(true)
        try {
        //  const status = axios.post('/api/falsa/usuario',{
        //     body:form
        //   })
        //   if(status===201){
        //     console.log('Se ha guardado exitosamente')
        //     setCargando(false)
          // }else{
          //   return
          // }
          setBd(form)

          setTimeout(() => {
            setCargando(false)
            setRespuesta(true)
            
          }, 2500);
      
        } catch (error) {
          setRespuesta(false)
          console.log('Ocurrior un error al guardar')
        }
       
      }else {
        return;
      }

    };

  return {
    form,
    errores,
    cargando,
    bd,
    respuesta,
    manejadorCambios,
    manejadorSalidaInput,
    enviarFormulario,
  };
};
