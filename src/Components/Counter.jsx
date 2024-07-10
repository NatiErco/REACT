
import React, { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0, increment = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef("");

  useEffect(() => {

    // En  useEffect, se compara el valor anterior del contador con el nuevo valor (counter). Se calcula la dirección del cambio como "arriba" si el nuevo valor es mayor que el valor anterior y "abajo" si es menor.
    const previousValue = counter - increment;
    const direction = counter > previousValue ? "arriba" : "abajo";

    if (directionRef.current !== direction) {
      directionRef.current = direction;
      console.log(`Cambio de dirección: ${direction}`); // Se actualiza directionRef.current solo si la dirección ha cambiado respecto al valor anterior, y se imprime en la consola.
    }
    // console.log(`The value of the counter is ${counter}`);
  }, [counter]); //  [counter] indica que el efecto solo se ejecutará cuando counter cambie.

  function incrementCounter() {
    setCounter((c) => c + increment);
  }

  function decrementCounter() {
    setCounter((c) => c - increment);
  }

  function resetCounter() {
    setCounter(initialValue);
    directionRef.current = ""; // Resetea la dirección cuando se reinicia el contador
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
