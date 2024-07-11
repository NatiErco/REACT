// Crea un TodoListcomponente que represente una uletiqueta con una lietiqueta para cada elemento contenido en la todos variable de estado .
// La todos variable de estado debe ser una matriz de cadenas.
// El TodoListcomponente también debe contener una inputetiqueta y un button.
// Cuando buttonse hace clic en , el controlador de eventos debe agregar el valor de la input etiqueta a la todos matriz.

import React, { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]); // Estado para almacenar la lista de tareas
  const [inputValue, setInputValue] = useState(""); // Estado para almacenar la nueva tarea

  function handleInputChange(event) {
    setInputValue(event.target.value); // Actualiza inputValue con el nuevo valor del campo de entrada.
  }

  // Funcion cuando se hace clic en el button...

  function handleAddTodo() {
    if (inputValue.trim()!== '') { // verificar que la tarea no esté vacía
      setTodos([...todos, inputValue]); // Agregar la nueva tarea a la lista de tareas
      setInputValue(""); // // Limpia el campo de entrada después de agregar la tarea
    }
  }


  // Modifique el TodoListcomponente para que  input borre cada vez que se agregue una tarea pendiente a la todos matriz. Agregue un "reinicio" buttonque borre la todosmatriz al hacer clic.

  function handleResetTodos  () {
    setTodos([]);  // Establece la lista de tareas como un arreglo vacío
  };

  // Modifíquelo TodoListagregando un "eliminar" buttona cada lietiqueta.
// Al hacer clic, el controlador de eventos debe eliminar el elemento correspondiente de la todosmatriz.


function handleDeleteTodo(index) {
  const newTodos = todos.filter((_, i) => i !== index); // Filtra la lista de tareas excluyendo la tarea con el índice dado
  setTodos(newTodos); // Actualiza la lista de tareas
}

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="button" onClick={handleAddTodo}>
        Add Task
      </button>
      <button type="button" onClick={handleResetTodos}>
      Reset
    </button>
      <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => handleDeleteTodo(index)}>Delete</button>
        </li>
        ))}
      </ul>
    </div>
  );
}
