import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MovieDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f7f0;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  border: 5px solid #e5d8a4;
`;
const MovieDetailTitle = styled.h2`
  color: #222;
  margin: 10px 0;
  font-size: 2.5rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;
const MovieDetailsTitleBorder = styled.div`
  width: 80%;
  border-bottom: 2px solid #e5d8a8;
  margin-bottom: 20px;
`;

const MovieDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;
const MovieDetailsImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 12px;
  margin-right: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MovieDescription = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  padding: 0;
  max-width: 450px;
`;

const MovieDetails = ({ movie }) => {
  // TODO:destructure items from movie

  return (
    <MovieDetailsCard>
      <MovieDetailTitle>{movie.title}</MovieDetailTitle>
      <MovieDetailsTitleBorder />
      <MovieDetailsContainer>
        <MovieDetailsImage src={movie.image} alt={movie.title} />
        <MovieDetailsContainer>
          <MovieDescription>{movie.description}</MovieDescription>
        </MovieDetailsContainer>
      </MovieDetailsContainer>
    </MovieDetailsCard>
  );
};

export default MovieDetails;
