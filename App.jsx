import React from 'react';
import { Welcome } from './Welcome';
// import { Hello } from './Hello'; //Significa que importa el componente Hello desde el archivo Hello.jsx.

export function App() {
  return (
    <div>
      <Welcome name="Jimmy" age={21} />
      <Welcome name="Jimmy" age={38} />
      <Welcome name="Jimmy" age={70} />
      <Welcome name="John" age={71} />
    </div>
  );
}