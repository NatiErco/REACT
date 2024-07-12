import React, { useEffect, useState } from "react";

export function UseGithubUser ({username}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
     
      setLoading(true);
      setError(null);
  
      fetch(`https://api.github.com/users/${username}`)
  
        .then((response) => {
  
         if(!response.ok){
          throw new Error ("User not found")
         }
          return response.json();
        })
  
        .then((json) => {
  
          console.log(json);
  
          setLoading(false)
           setData(json)
        })
  
        .catch((error) => {
          setError(error.message);  // Capturar cualquier error y establecerlo en el estado de error
          setLoading(false);
        });
  
    }, [username]);


    return {
        data,
        loading,
        error,
    };
}