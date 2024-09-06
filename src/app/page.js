"use client";

import Image from "next/image";
import styles from "./page.module.css";
import  MovieList  from "../components/MovieList";

export default function Home() {
  return (
    <div>
      <h1>Make Recipes Inspired By Your Favorite Ghibli Movie</h1>
      <MovieList />
    </div>
  );
}
