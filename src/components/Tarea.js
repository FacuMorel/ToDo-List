import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const Tarea = (props, completarTarea, id) => {
  const [modoEdit, setModoEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const editar = () => {
    setModoEdit(true);
  };

  const manejarEdit = (event) => {
    setEditText(event.target.value);
  };

  const submitEdit = (event) => {
    event.preventDefault();
    props.editar(props.id, editText);
    setEditText("");
    setModoEdit(false);
  };
  const borrarTarea = () => {
    props.borrar(props.id);
  };

  return (
    <div className="">
      <ul className="my-4">
        {!modoEdit ? (
          <li className="flex justify-around items-center">
            <button
              onClick={() => completarTarea(id)}
              className="flex-no-shrink text-sm mr-2 border-2 rounded-full hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400"
            ></button>
            <p className="w-full text-gray">{props.tarea} </p>
            <button
              className="flex-no-shrink p-1 ml-2 border-2 rounded text-red-500 font-semibold border-red-500 hover:text-white hover:bg-red-500"
              onClick={borrarTarea}
            >
              {" "}
              <FaTrash />
            </button>

            <button
              className="flex-no-shrink p-1 ml-4  border-2 rounded hover:text-white text-green-400 font-semibold border-green-400 hover:bg-green-400"
              onClick={editar}
            >
              <FaEdit />
            </button>
          </li>
        ) : (
          <form className="flex mt-4" onSubmit={submitEdit}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              value={editText}
              onChange={manejarEdit}
              placeholder="Modifica la tarea"
            />
            <button className="flex-no-shrink p-2  border-2 rounded hover:text-white font-semibold text-green-400 border-green-400 hover:bg-green-400">
              Guardar
            </button>
          </form>
        )}
      </ul>
    </div>
  );
};
export default Tarea;
