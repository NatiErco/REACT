import React, { useState } from "react";
import {useCounter} from "./UseCounter";


export function HookCounter({ initialValue = 0, incremento = 1 }) {

    const { counter, increment, decrement, reset } = useCounter(initialValue);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
