import React from 'react'
import { useEffect } from 'react';

const useFetch = (api , query="") => {
   const [data, setData] = React.useState([]);
   const url = `https://api.themoviedb.org/3/${api}?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`;
   async function fetchMovies() {
    const response = await fetch(url)
    const json = await response.json()
    setData(json.results)
  }

   useEffect(() => {
    fetchMovies();
  }, [url]);
  return  {data};
  
}

export default useFetch
