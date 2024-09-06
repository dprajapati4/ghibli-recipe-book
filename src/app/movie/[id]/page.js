"use client";
import React, { useState, useEffect } from "react";
import { fetchGhibliMovieById } from "@/utils/api";
import MovieDetails from "@/components/MovieDetails";

const MoviePage = ({ params }) => {
  const { id } = params;
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetchGhibliMovieById(id);
        setMovie(data);
      } catch (err) {
        console.log(
          `Error getting Ghibli movie data for movie with id: ${id} `,
          err
        );
        setError(err);
      }
    };
    getMovie();
  }, [id]);
  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Loading Movie Data.....</p>;
  }
  return (
    <MovieDetails movie={movie} />
  );
};

export default MoviePage;
