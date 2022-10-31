import React, {useContext} from 'react'; 
import {GlobalContext} from './context/GlobalState';
import { WatchMovieCard } from './WatchMovieCard';

export const Watched = () => {
  const {watched} = useContext(GlobalContext);
  return (
    <div className="movie-page">
       <div className="header">
          <h1 className="heading">Watched Movies</h1>
        </div>
      <div className="container">
       

        {watched.length > 0 ? (

          <div className="movie-grid">
            {watched.map(movie => (
              <WatchMovieCard movie={movie} type="watched"/>
            ))}
          </div>

        ) : (
          <h2 className='no-movies'>No Movies in your list, add some! </h2>
        )} 

      </div> 
    </div>
  )
}
