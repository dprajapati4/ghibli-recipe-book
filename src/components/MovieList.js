import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchGhibliMovies } from "@/utils/api";
import { josefinSans, amaticSC } from "@/app/layout";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  align-items: center;
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
// TODO: Make a cute loading spinner and error
  if (error) {
    return <p>{error}</p>;
  }

  if (!movies.length) {
    return <p>Loading Movies.....</p>;
  }
  return (
    <ListContainer>
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movie/${movie.id}`}>
          <MovieCard>
            <MovieImage src={movie.image} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieCard>
        </Link>
      ))}
    </ListContainer>
  );
};

export default MovieList;
