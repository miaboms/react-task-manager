import React from 'react';
import './Task.css';
// importamos el paquete ReactIcons, que nos sirve para usar iconos comunes.
import { AiOutlineDelete } from "react-icons/ai";

export default function Task({ id, text, done, finishTask, deleteTask }) {
    return    (
        // El contenedor de la tarea, que contiene otro contenedor de texto y el icono de la tarea.
        // Usamos un operador ternario para asignar clase dependiendo si la tarea esta completada o no.
        <div className={done ? 'task-container done' : 'task-container'}>
            <div className='task-text' onClick={() => finishTask(id)}>
                {text}
            </div>
            <div className='task-icon-container' onClick={() => deleteTask(id)}>
                <AiOutlineDelete className='task-icon'/>
            </div>
        </div>
    )
}