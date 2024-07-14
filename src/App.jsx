import { React } from "react";
import { Welcome } from "./Components/Welcome";
import { Link, Route, Routes } from "react-router-dom";
import { Catalogue } from "./Components/Catalogue";
import { Products } from "./Components/Products";

// Podemos usar React Router para definir rutas y renderizar diferentes componentes cada vez que cambie la ubicacion en la barra de direcciones.

export function App() {
  return (
    <Container title={<h1>My Awesome App</h1>}>
      <div>
        <Link to="/">Home</Link> |  <Link to="/products">Products</Link>
        
      </div>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="products" element={<Catalogue />} />
        <Route path=":id" element={<Products/>}/>
      </Routes>
    </Container>
  
  );
}
