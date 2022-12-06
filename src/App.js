import './App.css';
import Logo from './Components/Logo.js';
import TaskList from './Components/TaskList';

// La tarea se crea en TaskForm(), luego en newTask()(esta funcion esta dentro de sending())
// la describimos como el objeto(ponemos la informacion
// en los campos que corresponden), luego la pasamos como argumento en sending()que se encarga de enviarlo
// ese argumento lo recibe addTask que lo agrega al array y muestra al usuario. 


export default function App() {
  return (
    <div className="App">
      {/* Esta vez el logo lo hice como un componente reusable */}
     <Logo/>
     {/* Este div va a contener la lista de tareas asi como el formulario para crearlas */}
     <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <TaskList/>
     </div>
    </div>
  );
}