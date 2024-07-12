import { React, useState } from "react";
import { Welcome } from "./Components/Welcome";
import { Route, Routes } from "react-router-dom";
import { GithubUser } from "./Components/GithubUser";
import { GithubUsers } from "./Components/GithubUsers";
import { Counter } from "./Components/Counter";
import { ShowGithubUse } from "./Components/ShowGithubUse";


// Podemos usar React Router para definir rutas y renderizar diferentes componentes cada vez que cambie la ubicacion en la barra de direcciones.

export function App() {
  return (
    <div>
    <div><GithubUser username="NatiErco"/></div>
      <Routes>
      <Route path="/" element={<Welcome/>}/>
        <Route path="/:name" element={<Welcome/>}/>
        <Route path="/" element={<Counter/>}/>
       <Route path="/:username" element={<ShowGithubUse/>}/>
      </Routes>
    </div>
  );
}

