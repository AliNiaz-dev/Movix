import React from 'react'
import { Link } from "react-router-dom";
import backupImage from "../assets/backupImage.jpg"

const Card = ({movie}) => {
  const {id,original_title, overview,poster_path}=movie;
  const image= poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : backupImage;

  return (
   
      
<div className="w-full bg-neutral-primary-soft dark:bg-gray-900 border border-default dark:border-gray-700 rounded-lg shadow">  <Link to={`/movie/${id}`}>
    <img
      className="rounded-t-lg"
      src={image}
      alt=""
    />
  </Link>

  <Link to={`/movie/${id}`}>
    <h5 className="mt-6 mb-2  p-4 text-2xl font-semibold tracking-tight text-heading dark:text-white">
      {original_title}
    </h5>
  </Link>

  <p className="mb-6 p-4 text-body dark:text-gray-300">
    {overview}
  </p>

  
</div>



  )
}

export default Card
