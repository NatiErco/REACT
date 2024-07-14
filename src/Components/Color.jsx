// Cree un componente llamado Color que reciba un objeto llamado "color" como propiedad, que tendrá 2 propiedades, "id" y "name", y devuelva una etiqueta "li" que muestre la propiedad "name".
// Cree un segundo componente llamado Colors, que tome una matriz de objetos como propiedad, donde las propiedades siempre sean "name" e "id", y muestre una lista desordenada de componentes Color.

import React from "react";

export function Color({ color }) {

  return (
    <li>{color.name}
    </li>
);
}
