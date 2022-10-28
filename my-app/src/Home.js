import React, { useState, useEffect } from "react";
// import {Add} from '.components/Add';
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg"; 


const API_URL = "http://www.omdbapi.com?apikey=b6003d8a"; 

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [individualMovie, setindividualMovie] = useState([]); 

   
  useEffect(() => {
    searchMovies("Superman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const getMovieData = async (movie) => {
    const response = await fetch(`${API_URL}&i=${movie.imdbID}`);
    const data = await response.json();
    console.log(data)
    setindividualMovie(data) 
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    searchMovies(searchTerm);
  }

  return (

    <div className="app">
      <h1>WatchedList</h1>

      <div className="search">
        <form onSubmit={handleFormSubmit}>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
        </form>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <div onClick={() => {
              getMovieData(movie)
            }}>
              <MovieCard movie={movie}  />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      {/* <!-- Button trigger modal --> */}
{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> */}

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"><b>{individualMovie.Title}</b></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {/* {JSON.stringify(individualMovie)} */}
              <b>Release Date:</b> {individualMovie.Year}
              <br></br>
              <b>Rated:</b> {individualMovie.Rated}
              <br></br>
              <b>Runtime:</b> {individualMovie.Runtime}
              <br></br>
              <b>Director:</b> {individualMovie.Director}
              <br></br>
              <b>Genre:</b> {individualMovie.Genre} 
              <br></br>
              <b>Plot:</b> {individualMovie.Plot} 
              
            </div>
            {/* <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>
</div>
  );
};
