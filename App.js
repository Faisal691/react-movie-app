import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import './App.css';
import searchIcon from './search.svg';
// 2fe2cc0f
//const API_URL='http://www.omdbapi.com?apikey=2fe2cc0f';
const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=2fe2cc0f'
const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
    
    return(
        <div className="app">
      <h1>Mavioso</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};



export default App;