// Cree un segundo componente llamado Colors, que tome una matriz de objetos como propiedad, donde las propiedades siempre sean "name" e "id", y muestre una lista desordenada de componentes Color.

import React from 'react';
import { Color } from './Color';


export function Colors ({ colors }) {

    // Mapea sobre la matriz y para cada objeto crea un componente Color, pasando el objeto color como propiedad.
  return (
    <ul>
      {colors.map(color => (
        <Color key={color.id} color={color} /> // Devuelve una lista desordenada (ul) que contiene múltiples componentes Color.
      ))}
    </ul>
  );
};

