import React, { useState } from "react";
import "./index.css";
import TareaForm from "./components/TareaForm";
import Tarea from "./components/Tarea";

// import "todomvc-app-css/index.css";

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  const nuevaTarea = (id) => {
    setListaTareas([id, ...listaTareas]);
  };

  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  };

  const actualizarTarea = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {
      if (index === id) {
        e = tarea;
      }
      return e;
    });

    setListaTareas(listaActualizada);
  };
  const completarTarea = (id) => {
    const nuevaTask = [...listaTareas];
    nuevaTask[id].completed = true;
    setListaTareas(nuevaTask);
  };

  return (
    <div className="h-100 w-full flex items-center justify-center ">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <h1 className="text-gray-500 font-semibold text-2xl text-center">
          TODO LIST
        </h1>
        <TareaForm nuevaTarea={nuevaTarea} />
        <div className="mt-8">
          {listaTareas.map((e, index) => (
            <Tarea
              tarea={e}
              Tarea={e}
              borrar={borrar}
              id={index}
              editar={actualizarTarea}
              completarTarea={completarTarea}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
