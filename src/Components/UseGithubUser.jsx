
import React from "react";
import useSWR from "swr";

// Función de obtención de datos con fetch

const fetcher = (url) => fetch(url).then((response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
});

export function useGithubUser({ username }) {
  // Usa SWR para obtener datos
  const { data, error } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

    // Función para recuperar datos manualmente
    const fetchData = async () => {
      if (username) {
        await mutate();
      }
    };
    
  return {
    data,
    loading: !error && !data,
    error,
  };
}
