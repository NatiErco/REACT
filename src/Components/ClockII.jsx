import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function ClockII() {
  const language = useContext(LanguageContext);

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const messages = {
    english: `Current time: ${hours}:${minutes}`,
    spanish: `Hora actual: ${hours}:${minutes}`,
    german: `Aktuelle Uhrzeit: ${hours}:${minutes}`,
  };

  return (
    <div>
      <h1>{messages[language]}</h1>
    </div>
  );
}
