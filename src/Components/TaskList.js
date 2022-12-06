import React, { useState } from "react";
import TaskForm from "./TaskForm";
import './TaskList.css';
import Task from "./Task";

// cuando mostramos una lista en react, para que react sepa el orden y no los cambie al actualizarlos
//debemos pasar un prop o atributo llamado KEY, debe ser unico y es la forma que tiene react de 
//identificar los elementos en la lista.
export default function TaskList() {
    // usamos useState para crear un array de objetos, cada objeto va a ser una tarea
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if (task.text.trim()){
            task.text = task.text.trim();
            const actualTasks = [task, ...tasks];
            setTasks(actualTasks);
            console.log('Tarea Agregada');
            console.log(task);
        }
    }

    const deleteTask = id => {
        // aqui para eliminar las tareas tomamos el id de la tarea a eliminar, y filtramos la lista
        // de tareas actualizada, si los ids de los elementos en la lista son diferentes al id del 
        // argumento deleteTask, entonces esos elementos van a agregarse a la lista actualizada.
        const actualTasks = tasks.filter(task=> task.id !== id);
        setTasks(actualTasks);
    }

    const finishTask = id => {
        const actualTasks = tasks.map(task => {
            if (task.id === id) {
                task.done = !task.done;
            }
            return task;
        });
        setTasks(actualTasks);
    }

    return(
        // Las etiquetas vacias son llamados fragmentos, se usan para que se pueda escribir la estruc-
        // tura, y se eliminan o no aparecen cuando se crea la estructura html
        <>

        {/* en TaskForm, onSubmit es un prop */}
            <TaskForm onSubmit={addTask}/>
            <div className="task-list-container">
                {
                    // tomamos el array tasks y .map va a tomar cada tarea y ralizar lo que nosotros especifiquemos.
                    // cada tarea va a representar un objeto del array
                    // por cada tarea, va a crear un componente <Task> y como argumentos tendremos el
                    // objeto(task) en los argumentos de la arrow function.
                 tasks.map((task)=> 
                 <Task 
                //  no podemos solo pasar la id porque no podemos acceder a key directamente y 
                //necesitamos id para trabajar con otras funciones.
                 key={task.id}
                 id={task.id}
                 text={task.text} 
                 done={task.done}
                 finishTask={finishTask}
                 deleteTask={deleteTask}
                 />)
                }
            </div>
        </>
    );
};