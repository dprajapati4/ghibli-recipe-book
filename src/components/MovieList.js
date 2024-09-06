import React, { useState, useEffect } from "react";
import { fetchGhibliMovies } from "@/utils/api";
import styled from "styled-components";
import { josefinSans, amaticSC } from "@/app/layout";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 30px;
  background-color: #f0f0f0; /* Light grey background for the list */
`;

const MovieCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 250px;
  text-align: center;
  font-family: ${josefinSans.style.fontFamily}, cursive;
  &:hover {
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.5); /* Enhanced shadow on hover */
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

const MovieTitle = styled.h3`
  color: #333;
  margin: 10px 0;
`;

const MovieDescription = styled.p`
  padding: 0 10px;
  color: #555;
`;

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
    return <p>{error}</p>;
  }
  return (
    <ListContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.id}>
          <MovieImage src={movie.image} alt={movie.title} />
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDescription>{movie.description}</MovieDescription>
        </MovieCard>
      ))}
    </ListContainer>
  );
};

export default MovieList;
