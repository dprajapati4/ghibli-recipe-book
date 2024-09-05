import React, { useState, useEffect } from "react";
import { fetchGhibliMovies } from "@/utils/api";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  if(!movies.length) {
    return <p>Error</p>
  }

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};
