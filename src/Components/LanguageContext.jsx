// Cree un componente LanguageContext y envuélvalo Clock dentro de su proveedor.
// Agregue una selectetiqueta al componente en el que Clock se representa el componente que permita al usuario seleccionar el idioma y pasarlo como valor al proveedor.
// Consuma LanguageContextdentro del Clockcomponente mediante el useContext gancho y muestre el mensaje de "hora actual" en el idioma correcto.

import { createContext} from "react";

export const LanguageContext = createContext();