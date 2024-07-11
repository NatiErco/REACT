import { React, useState } from "react";
import { LanguageContext } from "./Components/LanguageContext";
import { ClockII } from "./Components/ClockII";

export function App() {

  // const lenguages = ["english", "spanish", "german", "japanese", "italian"]; Otra opcion era usar este array y luego con metodo map 

  const [select, setSelect] = useState("spanish");

  function handleSelect(event) {
    setSelect(event.target.value);
  }

  console.log(select);
  return (
    <div>
      <form>
        <select value={select} onChange={handleSelect}>
          <option value="english">english</option>
          <option value="spanish">spanish</option>
          <option value="german">german</option>
        </select>
      </form>

      <LanguageContext.Provider value={select}>
        <ClockII />
      </LanguageContext.Provider>
    </div>
  );
}
