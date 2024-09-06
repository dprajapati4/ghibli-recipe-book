import React, { useState, useEffect } from "react";
import { fetchGhibliMovies } from "@/utils/api";
import styled from "styled-components";
import { josefinSans, amaticSC } from "@/app/layout";
import { motion } from "framer-motion"; // For animations

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 30px;
  background: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MovieCard = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 250px;
  text-align: center;
  font-family: ${josefinSans.style.fontFamily}, cursive;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 4px solid #a5d6a7;
`;

const MovieTitle = styled.h3`
  color: #333;
  margin: 10px 0;
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const MovieDescription = styled.p`
  padding: 0 10px 15px 10px;
  color: #777;
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
