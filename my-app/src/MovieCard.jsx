
import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

const MovieCard = ({ movie }) => {
    const {
        addMovieToWatchlist, watchlist
    } = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === movie.imdbID);



    const watchlistDisabled = storedMovie ? true : false

    return (
        <div className="movie" key={movie.imdbID} data-toggle="modal" data-target="#exampleModal">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
            </div>

            <div className="controls">
                <br></br>
                <button className="btn"
                    disabled={watchlistDisabled}
                    onClick={() => {

                        addMovieToWatchlist(movie)
                    }}>

                    Add to watchlist
                </button>
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>
    );
}

export default MovieCard;