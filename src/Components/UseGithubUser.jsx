import React, { useEffect, useState } from "react";

export function UseGithubUser ({username}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {

      // Modificar el useGithubUsergancho para que, si el nombre de usuario es nulo, no se realice ninguna solicitud.

      if (!username) {
        setData(null);
        setLoading(false);  // si username es nulo, simplemente no se ejecutará la solicitud.
        return;
      }

      setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((json) => setData(json))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [username]);


    return {
        data,
        loading,
        error,
    };
}
