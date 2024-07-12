import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


// Este componente me muestra una etiqueta h2 con un mensaje de bienvenida con el nombre pasado como un prop.

export function Welcome() {

  const { name = "Wordl"} = useParams()
  const navigate = useNavigate()

  function handleLoginButton() {
   navigate("/login") 
  }

  return (
    <div>
    <h2 className="welcome">Welcome, {name}!</h2>
    <Link to="/login">Enter the app</Link>
    <div>
    <button onClick={handleLoginButton}>Enter the App</button>
    </div>
    </div>
  );
}
