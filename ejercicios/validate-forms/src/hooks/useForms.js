import { useState } from "react";

export const useForms = (valorDefecto, validaciones) => {
  const [form, setForm] = useState(valorDefecto);

  const [errores, setErrores] = useState({});

  
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

  return {
    form,
    errores,
    manejadorCambios,
    manejadorSalidaInput,
  };
};
