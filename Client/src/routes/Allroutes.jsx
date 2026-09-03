import { Routes ,Route } from "react-router-dom";
import { Moviedetail,Movielist,Pagenotfound,Search ,Chatbot} from "../pages";

import React from 'react'

const Allroutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
       <Route path="" element={<Movielist api="movie/now_playing"/>}/>
       <Route path="movie/:id" element={<Moviedetail/>}/>
       <Route path="movie/popular" element={<Movielist api="movie/popular"/>}/>
       <Route path="movie/top" element={<Movielist api="movie/top_rated"/>}/>
       <Route path="movie/upcoming" element={<Movielist api="movie/upcoming"/>}/>
       <Route path="search" element={<Search api="search/movie"/>}/>
       <Route path="*" element={<Pagenotfound/>}/> 
       <Route path="/chatbot" element={<Chatbot/>}/>
      </Routes>

    </div>
  )
}

export default Allroutes
