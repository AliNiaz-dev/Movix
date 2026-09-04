import React from 'react'
import Card from "../components/Card";
import useFetch from '../hooks/useFetch';
import Chatbutton from '../components/Chatbutton';

const Movielist = ({ api }) => {



  const { data: movies } = useFetch(api);




  return (
    <main >

      <section className="max-w-7xl m-auto py-7">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}

          <Chatbutton />
           


        </div>
      </section>
    </main>
  )
}

export default Movielist
