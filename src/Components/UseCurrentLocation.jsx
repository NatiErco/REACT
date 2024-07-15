import { useState, useEffect, useCallback } from 'react';

export function useCurrentLocation() {

  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError(new Error('Geolocation is not supported by this browser.'));
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(   // => Esta función utiliza navigator.geolocation.getCurrentPosition para obtener la ubicación del usuario. Si la geolocalización no está disponible, se establece un error. Si la geolocalización está disponible, se actualiza el estado location con las coordenadas actuales.

      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        console.log("Error,");
        setError(error);
        setLoading(false);
      }
    );
  }, []);

  // Se devuelve la ubicación actual (location), el estado de carga (loading), el estado de error (error) y la función getCurrentLocation para que pueda ser llamada manualmente si es necesario.

  return { 
    location,
    loading, 
    error,
    getLocation,
  };
}
