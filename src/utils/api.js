import axios from "axios";

const GHIBLI_API_URL = "https://ghibliapi.vercel.app";

export const fetchGhibliMovies = async () => {
  const endpoint = "/films";
  const url = GHIBLI_API_URL + endpoint;
  try {
    const res = axios.get(url);
    if (!res.ok) {
      throw new Error(`Error with status ${res.status}`);
    }
    const ghibliMovieData = res.json();
    return ghibliMovieData;
  } catch (error) {
    console.log("Error fetching Ghibli Movie data", error);
    return null;
  }
};

