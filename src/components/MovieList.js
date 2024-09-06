import React, { useState, useEffect } from "react";
import { fetchGhibliMovies } from "@/utils/api";
import styled from "styled-components";
import { josefinSans, amaticSC } from "@/app/layout";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 30px;
`;

const MovieCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 250px;
  text-align: center;
  font-family: ${josefinSans.style.fontFamily}, cursive;
  transition: transform 0.3s ease;

  &:hover {
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.5);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

const MovieTitle = styled.h3`
  color: #333;
  margin: 10px 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const MovieDescription = styled.p`
  padding: 0 10px 15px 10px;
  color: #555;
  font-size: 0.9rem;
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
