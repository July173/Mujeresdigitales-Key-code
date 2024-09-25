import { useState } from "react";

export const useForms = (valorDefecto) =>{
    const [form , setForm]= useState(valorDefecto)

    const manejadorCambios = (e)=>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value
        })

    };

    return {
        form,
        manejadorCambios
    }
}