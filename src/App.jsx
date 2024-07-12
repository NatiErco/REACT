import { React, useState } from "react";
import { GithubUser } from "./Components/GithubUser";
import { GithubUsers } from "./Components/GithubUsers";


// Podemos usar React Router para definir rutas y renderizar diferentes componentes cada vez que cambie la ubicacion en la barra de direcciones.

export function App() {
  return (
    
    <div>

  <GithubUser username="NatiErco"/>
    <GithubUsers/>
    </div>
  );
}
