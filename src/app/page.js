"use client";
import styled from "styled-components";
import { amaticSC } from "./layout";
import MovieList from "../components/MovieList";

const PageWrapper = styled.div`
  text-align: center;
`;

const Subtitle = styled.h2`
  font-family: ${amaticSC.style.fontFamily}, cursive;
  font-size: 2.2rem;
  color: #2e7d32;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export default function Home() {
  return (
    <PageWrapper>
      <Subtitle>Make Recipes Inspired By Your Favorite Ghibli Movie</Subtitle>
      <MovieList />
    </PageWrapper>
  );
}
