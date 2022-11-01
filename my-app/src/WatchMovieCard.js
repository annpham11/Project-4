import React from 'react'
import {MovieControls} from './MovieControls';
import "./App.css";

export const WatchMovieCard = ({ movie, type }) => {
  return (
    <div className='movie'>
        {/* <div className='overlay'> */}
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />

            <MovieControls type={type} movie={movie} />
        {/* </div> */}
    </div>
     
  )
}
