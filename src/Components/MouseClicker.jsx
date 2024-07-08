import React from "react";

export function MouseClicker() {

// 1- Esta funcion, imprimira por consola el atributo name al hacer click en el boton.
  function handleButtonClick(event) {
    console.log(event.target.name);
  }


// 2- Esta funcion, imprimira por consola el atributo src de la imagen al hacer click en ella. Dentro de esta funcion se llama a  event.stopPropagation() para evitar que al hacer click se propague tambien al botton.  
  function handleImageClick(event) {
    event.stopPropagation(); // se evita que se ejecute el controlador de eventos del botón cuando se hace clic en la imagen.
    console.log(event.target.src);
  }
  return (
    <button name="one" onClick={handleButtonClick}> 
      Click me!
      <img
        src="https://via.placeholder.com/150"
        width={50}
        height={50}
        onClick={handleImageClick}
      />
    </button>
  );
} // Esta implementación asegura que cada vez que se haga clic en el botón, el atributo name del botón se imprimirá en la consola.

// En resumen: Se definen dos funciones manejadoras de eventos, una para el botón y otra para la imagen, que se ejecutan de forma independiente una de la otra.