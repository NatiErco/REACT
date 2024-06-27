// Cree un AlertClockcomponente de función que represente un botón. Cuando se hace clic en el botón, se debe mostrar una alerta con la hora actual.
// Renderice el AlertClockcomponente dentro del Appcomponente. Haga que el AlertClockcomponente reciba el controlador de eventos como un accesorio, en lugar de implementarlo dentro del propio componente.

import { React } from "react";

export function AlertClick() {
  function handleButtonClick() {
    alert(`La hora actual es: ${new Date().toLocaleTimeString()}`);
  }
  return (
    <div>
      <button onClick={handleButtonClick}>Click me!</button>
    </div>
  );
}
