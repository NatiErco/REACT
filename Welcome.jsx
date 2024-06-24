import React from 'react'
import { Age } from './Age';


// export function Welcome (props) { // Esta funcion es exportada para que pueda ser importada y utilizada en otros archivos. Esta función recibe un argumento props, que es un objeto que contiene todas las propiedades que se le pasan al componente.

// const {name} = props;  // se esta desestructurando la propiedad name del objeto prop. 
// // Esto extrae la propiedad name del objeto props y la asigna a una variable local name.
//   return (
//     <h2>Welcome, {name}!</h2>
//   );
// }


// En resumen.
// export function Welcome(props): Define y exporta una función Welcome que recibe props.
// const { name } = props: Desestructura la propiedad name del objeto props.
// return (<h2>Welcome, {name}!</h2>);: Retorna un elemento JSX que muestra un mensaje de bienvenida que incluye el nombre pasado en las props.


// Otra forma de hacerlo en una sola linea a la desestructuracion del atributo name, es asi:

// export function Welcome({name}){  // utiliza la desestructuración directamente en la declaración de la función para extraer la propiedad name de props.
//   return <h2>Welcome, {name}!</h2>
// }

// En resumen:
// export function Welcome({name}): Define y exporta una función Welcome que recibe un objeto de propiedades y desestructura la propiedad name.
// return <h2>Welcome, {name}!</h2>;: Retorna un elemento JSX que muestra un mensaje de bienvenida que incluye el nombre pasado como prop.

// Ejercicio 1: -

// 1- El Age componente se renderiza solo si la age propiedad es mayor que 18.
// 2- El Age componente se renderiza sólo si el age accesorio está presente.
// 3 El Age componente se renderiza sólo si el age accesorio es mayor que 18y menor que 65.
// 4 El Agecomponente se representa solo si el age accesorio es mayor que 18, menor que 65 y el name accesorio es igual a "John".

export function Welcome({name, age}){
  return (
  <div>
  <h2>Welcome, {name}!</h2>
  {age > 18 && <Age age={age}/>} 
  {age !== undefined && <Age age={age} />}
  {age > 18 && age < 65 && <Age age={age} />}
  {age > 18 && age < 65 && name === "John" && <Age age={age} />}

  </div>
);
}