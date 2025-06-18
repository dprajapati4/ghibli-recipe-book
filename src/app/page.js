"use client";
import styled from "styled-components";
import { amaticSC } from "./layout"; // re-use font from layout
import MovieList from "../components/MovieList";

const PageWrapper = styled.div`
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-family: ${amaticSC.style.fontFamily}, cursive;
  font-size: 3rem;
  color: #2e7d32;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export default function Home() {
  return (
    <PageWrapper>
      <Title>Make Recipes Inspired By Your Favorite Ghibli Movie</Title>
      <MovieList />
    </PageWrapper>
  );
}
