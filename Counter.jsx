// ESTADO PRIMER EJERCICIO:

//Cree un Countercomponente de función y cree una nueva variable de estado llamada counterinicializada en 0. El Countercomponente debe representar el countervalor dentro de una h2etiqueta y el countervalor debe incrementarse cada vez que el usuario hace clic en un botón.
// Consejo: utiliza el useStateHook. Haga que el valor inicial de counter y la cantidad de incremento se pasen como props al componente. Al llamar a la función "setter" para incrementar el contador, 

// ¿el parámetro debería ser una función o un valor inmediato? Funcion ¿Por qué? Respuesta:

//  Deberia ser una funcion y no valor inmediato (función como argumento), donde "c" representa el valor actual del estado counter. 
// Usando una función siempre trabajaremos con el valor más reciente del estado... an cambio si usamos valor inmediato, setCounter(counter + increment)  y no funcion, podriamos incurrir en varios problemas con la sincronizacion y actualizacion.

// ESTADO SEGUNDO EJERCICIO:

// Extraiga la h2 etiqueta que muestra la counter variable de estado en un nuevo componente llamado CounterDisplayy renderícela dentro del Countercomponente, pasándole la countvariable de estado como accesorio.

// Agregue un botón de disminución y un botón de reinicio al Countercomponente. El botón de decremento debería disminuir el contador en la cantidad pasada como accesorio, y el botón de reinicio debería restablecer el contador al valor inicial pasado como accesorio.

import React, { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

// El componente Counter recibe dos props: initialValue y increment.

export function Counter({ initialValue = 0, increment = 1 }) {

// El estado counter se inicializa con initialValue.
const [counter, setCounter] = useState(initialValue);

// La función incrementCounter usa setCounter con una función que toma el valor actual (c) y lo incrementa en increment.
function incrementCounter() {
setCounter((c) => c + increment);
  }

  function decrementCounter() {
  setCounter ((c) => c - increment);
  }

  function resetCounter () {
    setCounter(initialValue);
  }

return (
<div>
    <CounterDisplay counter={counter} />
    
    <button onClick={incrementCounter}>Increment</button>
    <button onClick={decrementCounter}>Decrement</button>
    <button onClick={resetCounter}>Reset</button>
</div>
  );
}


