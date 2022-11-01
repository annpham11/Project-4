import React, {useContext} from 'react'; 
import { GlobalContext } from './context/GlobalState';
import { WatchMovieCard } from './WatchMovieCard';
import "./App.css";

export const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);

    console.log("watchlist = ",watchlist)
  return (

    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
        </div>

        {watchlist.length > 0 ? (
          <div className="container">
            {watchlist.map(movie => (
               <WatchMovieCard movie={movie} type="watchlist"/>
            ))}
          <br></br>
          </div>

        ) : (
          <h2 className='no-movies'>No Movies in your list, add some! </h2>
        )} 

      </div> 
    </div>
    
  );
};