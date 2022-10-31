import React, {useContext} from 'react'; 
import { GlobalContext } from './context/GlobalState';

export const MovieControls = ({movie, type}) => {
  const { removeMovieFromWatchlist, addMovieToWatched } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
        {type === 'watchlist' && (
            <>
            <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)} >
                Watched
            </button>

            <button className="ctrl-btn" onClick={() => removeMovieFromWatchlist(movie.imdbID)} >
                Remove 
            </button>

            </>
        )}

    </div>
  )
}
