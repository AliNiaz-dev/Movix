import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import backupImage from "../assets/backupImage.jpg"
import { useNavigate } from "react-router-dom";
import Chatbutton from '../components/Chatbutton';



const Moviedetail = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const image= movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : backupImage;
  const navigate = useNavigate();


  useEffect(() => {
    const fetchMovie = async () => {
    
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        setMovie(data);

    }
      fetchMovie();
},[]);

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300 py-10 px-5">
      <Chatbutton />
     <button
  onClick={() => navigate(-1)}
  className="mb-6 bg-gray-900 dark:bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
>
  Go Back
</button>


  <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-3 gap-10">

      {/* Poster */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={movie.title}
          className="w-full max-w-sm rounded-3xl shadow-2xl border border-gray-300 dark:border-gray-800 object-cover hover:scale-105 duration-300"
        />
      </div>

      {/* Details */}
      <div className="lg:col-span-2">

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {movie.title}
          </h1>

          {/* Release */}
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            {movie.release_date || "N/A"}
          </p>

          {/* Overview */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Overview
            </h2>

            <p className="leading-8 text-gray-700 dark:text-gray-300">
              {movie.overview || "No overview available."}
            </p>
          </div>

          {/* Genres */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Genres
            </h2>

            <div className="flex flex-wrap gap-3">

              {movie.genres?.length ? (
                movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-red-600 text-white px-5 py-2 rounded-full font-medium"
                  >
                    {genre.name}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 dark:text-gray-400">
                  N/A
                </span>
              )}

            </div>
          </div>

          {/* Information Cards */}

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">

            <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 p-5">
              <p className="text-gray-500 dark:text-gray-400">
                 Rating
              </p>

              <h3 className="text-3xl font-bold text-yellow-500">
                {movie.vote_average ?? "N/A"}
              </h3>
            </div>

            <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 p-5">
              <p className="text-gray-500 dark:text-gray-400">
                Vote Count
              </p>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {movie.vote_count ?? "N/A"}
              </h3>
            </div>

            <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 p-5">
              <p className="text-gray-500 dark:text-gray-400">
                Runtime
              </p>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {movie.runtime ? `${movie.runtime} min` : "N/A"}
              </h3>
            </div>

            <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 p-5">
              <p className="text-gray-500 dark:text-gray-400">
                 Budget
              </p>

              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                {movie.budget
                  ? `$${movie.budget.toLocaleString()}`
                  : "N/A"}
              </h3>
            </div>

            <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 p-5">
              <p className="text-gray-500 dark:text-gray-400">
                 Release Date
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {movie.release_date || "N/A"}
              </h3>
            </div>

            <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 p-5">

              <p className="text-gray-500 dark:text-gray-400 mb-3">
                IMDb
              </p>

              {movie.imdb_id ? (
                <a
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg transition"
                >
                  View on IMDb
                </a>
              ) : (
                <span className="text-gray-500 dark:text-gray-400">
                  N/A
                </span>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
  )
}

export default Moviedetail
