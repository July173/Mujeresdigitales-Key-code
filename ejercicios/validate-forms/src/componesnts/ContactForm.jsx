import React from "react";
import { useForms } from "../hooks/useForms";
import { Loader } from "./Loader";
import Mail from './Mail';
import videoFile from '../assets/videos/fondo.mp4'; // Ruta a tu video

const valorDefecto = {
  nombre: "",
  email: "",
  asunto: "",
  observaciones: "",
};

const validaciones = (form) => {
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,6}$/;
  let regexComments = /^.{1,255}$/;

  let errorsFormulario = {};

  if (!form.nombre.trim()) {
    errorsFormulario.nombre = "El campo es obligatorio";
  }

  if (!form.email.trim()) {
    errorsFormulario.email = "El campo es obligatorio";
  } else if (!regexEmail.test(form.email.trim())) {
    errorsFormulario.email =
      "El campo no tiene el formato de un correo electronico";
  }
  if (!form.asunto.trim()) {
    errorsFormulario.asunto = "El campo es obligatorio";
  }
  if (!form.observaciones.trim()) {
    errorsFormulario.observaciones = "El campo es obligatorio";
  } else if (!regexComments.test(form.observaciones.trim())) {
    errorsFormulario.observaciones =
      "El campo debe tener minimo 1 caracter y maximo 255 caracteres";
  }

  return errorsFormulario;
};

const ContactForm = () => {
  const { form, errores, cargando, bd, respuesta,  manejadorCambios, manejadorSalidaInput, enviarFormulario } = useForms(
    valorDefecto,
    validaciones
  );

  return (
    <div className="static w-full h-screen ">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="bottom-0 left-0 z-0 flex object-cover w-full h-screen "
      >
        <source src={videoFile} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>

      {/* Contenido del formulario */}
      <div className="container absolute w-1/3 p-6 text-center bg-gray-300 border-none rounded-lg drop-shadow-2xl top-28 left-1/3">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-emerald-400">Formulario de contacto</h1>
        <form onSubmit={enviarFormulario}>
          
          
          <p className="mb-2 ml-12 text-lg text-left text-emerald-800">Nombre</p>
          <div className="relative mb-5 w-80">
          <i className="absolute text-gray-500 transform -translate-y-1/2 fa-solid fa-user left-14 top-1/2"></i>
          <input
           
            type="text"
            name="nombre"
            placeholder="Escribe tu nombre..."
            value={form.nombre}
            onChange={manejadorCambios}
            onBlur={manejadorSalidaInput}
            className="p-4 pl-12 border ml-9 w-80 rounded-3xl"
          / >
            </div>
            
          {errores.nombre && <p className="text-red-500 p-error">{errores.nombre}</p>}
          
          <p className="mb-2 ml-12 text-lg text-left text-emerald-800">Email</p>
          <div className="relative mb-5 w-80">
          <i className="absolute text-gray-500 transform -translate-y-1/2 fa-solid fa-envelope left-14 top-1/2"></i>
          <input
            type="email"
            name="email"
            placeholder="Escribe tu correo electronico..."
            value={form.email}
            onChange={manejadorCambios}
            onBlur={manejadorSalidaInput}
            className="p-4 pl-12 border ml-9 w-80 rounded-3xl"
          />
          </div>
          {errores.email && <p className="text-red-500 p-error">{errores.email}</p>}
          
          <p className="mb-2 ml-12 text-lg text-left text-emerald-800">Asunto</p>
          <div className="relative mb-5 w-80">
          <i className="absolute text-gray-500 transform -translate-y-1/2 fa-solid fa-book left-14 top-1/2"></i>
          <input
            type="text"
            name="asunto"
            placeholder="Asunto ..."
            value={form.asunto}
            onChange={manejadorCambios}
            onBlur={manejadorSalidaInput}
            className="p-4 pl-12 border ml-9 w-80 rounded-3xl"
          />
            </div>
          {errores.asunto && <p className="text-red-500 p-error">{errores.asunto}</p>}
          
          <p className="mb-2 ml-12 text-lg text-left text-emerald-800">Observaciones</p>
          <textarea
            name="observaciones"
            placeholder=" Escribe tus observaciones..."
            cols={50}
            rows={5}
            value={form.observaciones}
            onChange={manejadorCambios}
            onBlur={manejadorSalidaInput}
             className="p-4 mb-5 border w-80 rounded-3xl"
          />
          {errores.observaciones && (
            <p className="text-red-500 p-error">{errores.observaciones}</p>
          )}
          <div className="w-24 p-2 mt-4 font-bold transition ease-in-out border-none rounded-md shadow-md cursor-pointer bg-emerald-500 hover:text-white hover:drop-shadow-lg ml-36 mb-7">
          <input type="submit" value="Enviar" disabled={cargando} className={cargando ? 'deshabilitado' : ''}/>
          </div>
        </form>
        {cargando && <Loader/>}
        {respuesta && <Mail datos={bd}/>}
      </div>
    </div>
 
  );
};

export default ContactForm;
