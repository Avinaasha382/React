import Places from './Places.jsx';
import { useState,useEffect} from 'react';
import ErrorPage from "./Error.jsx"
import {sortPlacesByDistance} from "../loc.js"
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces,setAvailablePlaces] = useState([]);
  const [isFetching,setIsFetching] = useState(null);
  const [error,setError] = useState();
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const placesData = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(placesData,position.coords.latitude,position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        })
        
      }

      catch(error) {
        setError(error);
        setIsFetching(false);
      }

    
    }
    fetchData();
  },[])

  if(error)
  {
    return <ErrorPage title="An error has occured" message={error.message}/>
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isFetching}
      loadingText="Places are loading"
    />
  );
}
