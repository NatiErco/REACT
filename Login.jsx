import React, { useState } from "react";

// Cree un Logincomponente que contenga tres entradas: 
// 1 - una username entrada
// 2 - una password entrada
// 3 - una remember casilla de verificación. (Las tres entradas deben ser componentes controlados.)

export function Login() {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [remember, setRemember] = useState('');


// Se cream funciones que son controladores de eventos, actualizan el estado del nombre de usuario, del password y de la casilla de verificacion.

function handleUsernameChange(event) {
setUsername(event.target.value);
}

function handlePasswordChange(event) {
 setPassword(event.target.value);
}

function handleRememberChange(event) {
setRemember(event.target.checked);  
}


function handleSubmit (event){  // se encarga de gestionar lo que ocurre cuando el formulario se envía.
  event.preventDefault();
  console.log('Username:', username);
  console.log('Password:', password);
  console.log('Remember me:', remember);
};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value = {username} onChange={handleUsernameChange}/>
      </label>
      <br/>
     
      <label>
        Password:
        <input type="text" value = {password} onChange={handlePasswordChange}/>
      </label>
      <br />

      <label>
        Remeber me:
        <input type="checkbox" checked = {remember} onChange={handleRememberChange}/>
      </label>
      <br/>
      <button type="submit">Login</button>
    </form>
  );
}
