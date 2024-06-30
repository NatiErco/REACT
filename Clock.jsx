import React, { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date());


  // Es un hook, que recibe un efecto secundario que devuelve(retorna) una funcion de limpieza.
  // useEffect se usa para actualizar la hora cada segundo.
  useEffect(() => {

    const intervalID = setInterval(() => {
//  console.log('Updating date...');
    setTime(new Date())
    }, 1000);

    return () => {
        clearInterval(intervalID)  // Se limpia el intervalo cuando el componente se desmonta.
    }
  }, []);


  return <div>
  <h2>Current time: {time.toLocaleTimeString()}</h2>
  </div>;
}
