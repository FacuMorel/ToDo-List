import React, { useState } from "react";

const TareaForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [validacion, setValidacion] = useState(true);

  const manejarFormulario = (event) => {
    setInputText(event.target.value);
    console.log(inputText);
  };

  const submit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      props.nuevaTarea(inputText);
      setInputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };

  return (
    <div className="">
      <form className="" onSubmit={submit}>
       
        <div className="flex mt-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Agrega tarea"
            value={inputText}
            onChange={manejarFormulario}
          />
          <button
            className="flex-no-shrink p-2 border-2 rounded text-teal-500 font-semibold border-teal-500
hover:text-white hover:bg-teal-400"
          >
            Agregar
          </button>
        </div>
      </form>
      {!validacion && (
        <div className="text-yellow-700">Añada una tarea, por favor</div>
      )}
    </div>
  );
};
export default TareaForm;
