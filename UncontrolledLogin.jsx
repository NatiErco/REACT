import React from "react";
import PropTypes from 'prop-types';

// Cuando usamos componentes no controladores, los valores de los inputs no se almacenan en el estado del componente, sino que se manejan directamente por el DOM.

// EJERCICIO: Intenta acceder a los valores del formulario mediante la FormDataAPI. ¿Cuáles son las ventajas? ¿Cuáles son las desventajas?

// usando Form Data noto mas simplicidad al momento de ejecutar el codigo y configurarlo, mas rapido y mas intuitivo que usando el uncontrolled.

export function UncontrolledLogin({ onLogin} ) {


    function handleFormSubmit(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target)
    const username = formData.get("username");
    const password = formData.get("password");
    const session = formData.get("session") === "on" ? true : false;

    // const username = event.target.elements.namedItem("username").value;
    // const password = event.target.elements.namedItem("password").value;
    // const session = event.target.elements.namedItem("session").checked;

    onLogin({ username, password, session });
}


function handleReset(event) {
    event.preventDefault();
    event.target.form.reset();
}


  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Username:
        <input name="username" type="text" />
      </label>
      <br />
      <label>
        Password:
        <input name="password" type="password" />
      </label>
      <br />
      <label>
        Remember me:
        <input name="session" type="checkbox" />
      </label>
      <br />
      <button type="submit">Login</button>
      <br />
      <button type="reset" onClick={handleReset}>Reset</button>
    </form>
  );
}


UncontrolledLogin.propTypes = {
onLogin: PropTypes.func.isRequired
  };