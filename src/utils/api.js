import axios from "axios";
import { GHIBLI_API_URL, FOODS_DB } from "../lib/constants";

export const fetchGhibliMovies = async () => {
  const endpoint = "/films";
  const url = GHIBLI_API_URL + endpoint;
  try {
    const res = await axios.get(url);
    if (!res.data) {
      throw new Error(`Error with status ${res.status}`);
    }
    const ghibliMoviesData = res.data;
    return ghibliMoviesData;
  } catch (error) {
    console.log("Error fetching Ghibli Movies data", error);
    return null;
  }
};

export const fetchGhibliMovieById = async (id) => {
  const endpoint = `/films/${id}`;
  const url = GHIBLI_API_URL + endpoint;
  try {
    const res = await axios.get(url);
    if (!res.data) {
      throw new Error(`Error with status ${res.status}`);
    }
    const ghibliMovieData = res.data;
    return ghibliMovieData;
  } catch (error) {
    console.log("Error fetching Ghibli Movie data", error);
    return null;
  }
};

export const fetchFoodsByMovieId = async (id) => {
  // const endpoint = `/films/${id}`;
  // const url = GHIBLI_API_URL + endpoint;
  try {
    // const res = await axios.get(url);
    // if (!res.data) {
    //   throw new Error(`Error with status ${res.status}`);
    // }
    const ghibliFoodByData = res.data;
    return ghibliMovieData;
  } catch (error) {
    console.log("Error fetching Ghibli Movie data", error);
    return null;
  }
};
