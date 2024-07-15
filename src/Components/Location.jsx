import React from 'react'
import { useCurrentLocation } from './UseCurrentLocation'

export function Location () {

const {location, loading, error, getLocation} = useCurrentLocation();

  return (
    <div>

    <button onClick={getLocation}>Get Current Location</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
     
    </div>
  );
}
