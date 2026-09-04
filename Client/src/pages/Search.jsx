import React from 'react'
import Card from "../components/Card";
import useFetch from '../hooks/useFetch';
import {useSearchParams} from 'react-router-dom';
import Chatbutton from '../components/Chatbutton';

const Search = ({api}) => {
  
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const {data : movies} = useFetch(api , query);


  return (
    <main>
    <section className="max-w-7xl m-auto py-7">
       <div className='text-gray-700 text-2xl font-bold mb-5 dark:text-white'>{movies.length === 0 ? `No Result Found for "${query}"`: `Result found for "${query}"`  }</div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
            <Chatbutton/>
             </div>
     </section>
    </main>
  )
}

export default Search
