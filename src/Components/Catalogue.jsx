import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Catalogue() {
  return (
    <div>
      <h2> All products</h2>

      <ul>
        <li>
          <Link to="/products/1">Producto 1</Link>
        </li>
        <li>
          <Link to="/products/2">Producto 2</Link>
        </li>
        <li>
          <Link to="/products/3">Producto 3</Link>
        </li>
        <li>
          <Link to="/products/4">Producto 4</Link>
        </li>
        <li>
          <Link to="/products/5">Producto 5</Link>
        </li>
      </ul>

      <hr />
      <Outlet />
    </div>
  );
}
