import { useState,useEffect } from "react";

export default function useFetch(fetchFn,initialValue) {
    const [data,setData] = useState(initialValue);
    const [isFetchingData,setIsFetchingData] = useState(null);
    const [error,setError] = useState();

    useEffect(() => {
        async function fetchUserData() {
          setIsFetchingData(true);
          try{
            const data = await fetchFn();
            setData(data);
            setIsFetchingData(false);
          }
          catch(error) {
            setError(error);
            setIsFetchingData(false);
          }
        }
    
        fetchUserData();
      },[])

      return {
        data,
        isFetchingData,
        setData,
        error
      };
}