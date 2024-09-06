import React, { useState, useEffect } from "react";
import { fetchGhibliMovies } from "@/utils/api";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchGhibliMovies();
        setMovies(data);
      } catch (err) {
        console.log("Error getting Ghibli movie data.", err);
        setError(
          "Failed to get Ghibli movies. Try again. If the problem persists contact support."
        );
      }
    };

    getMovies();
  }, []);

  if (!movies.length) {
    return <p>Error</p>;
  }  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          {/* <p>{movie.title}</p> */}
          <img
            src={movie.image}
            alt={movie.title}
            height={"250px"}
            width={"auto"}
          />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
