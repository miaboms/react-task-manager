import './TaskForm.css';
import { useState } from 'react';
// importamos v4 de uuid, un generador de ids
import { v4 as uuidv4 } from 'uuid';
 
export default function TaskForm (props) {

    // useState para generar el estado de las tareas(lista de tareas)
    const [input, setInput] = useState('');

    // typing = manejarCambio
    const typing = e => {
        setInput(e.target.value);
        console.log(e.target.value);
    };

    //Esta funcion (manejarEnvio = sending) se va a llamar cuando se trate de enviar el formulario al 
// hacer clic en el boton Agregar Tarea. Se va a recibir como argumento un evento que se va 
// a enviar automaticamente
// e = evento (es un valor)
// es muy util porque evitara que tengamos que recargar la pagina cuando se envie el formulario.
    const sending = e => {
        // evita que se cargue toda la app para enviar el form
        e.preventDefault();
        console.log('Enviando...');
        const newTask = {
            id: uuidv4(),
            text: input,
            done: false
        };
        props.onSubmit(newTask);
    };

    return (

        // este form va a tener elementos input donde ponemos la info(los inputs pueden ser componentes
        // tambien.)
        <form className="task-form" onSubmit={sending} >
            <input className="task-input" 
            type='text' 
            placeholder='Escribe una Tarea...' 
            name='texto'
            onChange={typing} 
            />
            <button className="task-button">Agregar Tarea</button>
        </form>
    )
};

