import React, { useState, useEffect } from "react";
import {Routes, Route, Link} from 'react-router-dom';
import {Header} from './Header'; 
import {Watchlist} from './Watchlist';
import {Watched} from './Watched';
import {Home} from './Home';
import {Login} from './Login'; 
import { GlobalProvider } from "./context/GlobalState";
// import {Add} from '.components/Add';
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg"; 
import "./App.css";


const API_URL = "https://www.omdbapi.com?apikey=b6003d8a"; 

const App = () => {
  

  return (
  <GlobalProvider>
    <div class="Navbar"> 
        <Header />
    </div>
    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/watched" element={<Watched />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/watchlist" element={<Watchlist />} />

    </Routes>
  </GlobalProvider>
  );
};


export default App;
