import React from "react";


// Este componente me muestra una etiqueta h2 con un mensaje de bienvenida con el nombre pasado como un prop.

export function Welcome({ name }) {
  return <h2 className="welcome">Welcome, {name}!</h2>;
}
