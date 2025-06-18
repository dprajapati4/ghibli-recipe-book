import axios from "axios";
import { GHIBLI_API_URL} from "../lib/constants";

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

const formatMovieName = (movieName) => {
  return movieName
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

