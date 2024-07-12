import React, { useState } from "react";
    
    export function useCounter({ initialValue = 0, incremento = 1 }) {

    const [counter, setCounter] = useState(initialValue);
  
    function incrementCounter() {
      setCounter((c) => c + incremento);
    }
  
    function decrementCounter() {
      setCounter((c) => c - incremento);
    }
  
    function resetCounter() {
      setCounter(initialValue);
    }
  
    return {
      counter: counter,
      increment: incrementCounter,
      decrement: decrementCounter,
      reset: resetCounter,
    };
  }
  