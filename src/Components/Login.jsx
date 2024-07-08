import React, { useState } from "react";
import PropTypes from 'prop-types';

// Ejercicio 7

// Agregue un "login" button al Login componente. Ok
// Este botón debe estar deshabilitado mientras las entradas username y passwordestén vacías.
// Al hacer clic, el controlador de eventos adjunto al botón debe llamar a una onLoginfunción pasada como propiedad al Logincomponente, pasándole el estado, que imprimirá el valor del estado.

export function Login({onLogin}) {  // Debo añadir la prop onLogin al componente Login.

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [remember, setRemember] = useState(false);


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
  onLogin({ username, password, remember });
};
// El botón de inicio de sesión está deshabilitado si username o password están vacíos:

const isLoginDisabled = !username || !password; // isLoginDisabled es una variable booleana que es true si username o password están vacíos. El botón de "login" usa esta variable para establecer su atributo disabled, mas abajo se lo agregamo0s


// Agregue un "reinicio" buttonal Login componente que borra el contenido de las tres entradas cuando se hace clic.


// La función handleReset se encarga de restablecer los valores de los campos del formulario a sus estados inciales.
function handleReset(event) {
  event.preventDefault(); // este metodo evita el comportamiento predeterminado del evento. 
  setUsername(''); // se llama a la función setUsername con una cadena vacía (''). estamos restableciendo el estado username a su valor inicial, que es una cadena vacía.
  setPassword(''); 
  setRemember(false);
}


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value = {username} onChange={handleUsernameChange}/>
      </label>
      <br/>
     
      <label>
        Password:
        <input type="password" value = {password} onChange={handlePasswordChange}/>
      </label>
      <br />

      <label>
        Remember me:
        <input type="checkbox" checked = {remember} onChange={handleRememberChange}/>
      </label>
      <br/> <br/>
      <button type="submit" disabled={isLoginDisabled}>Login</button>
      <br/> <br/>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

// Utilice el form elemento para gestionar el envío del formulario y adjunte el handleLogin controlador de eventos al onSubmit evento del form elemento. ¿Cómo se evita el comportamiento predeterminado del form elemento?

// Elemento form:

// El componente form tiene un atributo onSubmit que está vinculado a la función handleSubmit. Este atributo asegura que cuando el formulario se envía entoncs se ejecuta la función handleSubmit.

// Demtro de esta  funcion, handleSumit, se llama  al metodo event.preventDefault() y se evita que el formulario se envíe y la página se recargue. permitiendo asi que se ejecute la logica de  onLogin con el estado actual de las variables.
