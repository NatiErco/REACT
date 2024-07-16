import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [searchUsername, setSearchUsername] = useState(""); // Es un estado que almacena el nombre de usuario que el usuario está buscando en GitHub. Inicialmente está vacío ("").
  const [users, setUsers] = useState([]); // users es un estado que almacena la lista de usuarios que se han encontrado y se van a mostrar en la lista.

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Submitting search for ${searchUsername}`);

    if (searchUsername.trim() === "") {
      alert("Por favor, ingrese un nombre de usuario");
      return;
    }
    setUsers((prevUsers) => [...prevUsers, searchUsername]);
    setSearchUsername("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchUsername}
          onChange={(e) => setSearchUsername(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>

      <ul>
        {users.map((username, index) => (
          <li key={index}>
            <GithubUser username={username} />
          </li>
        ))}
      </ul>
    </div>
  );
}
