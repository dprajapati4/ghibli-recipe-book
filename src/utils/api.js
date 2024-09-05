import axios from "axios";

const GHIBLI_API_URL = "https://ghibliapi.vercel.app";

export const fetchGhibliMovies = async () => {
  const endpoint = "/films";
  const url = GHIBLI_API_URL + endpoint;
  try {
    const res = await axios.get('https://ghibliapi.vercel.app/films');
    if (!res.data) {
      throw new Error(`Error with status ${res.status}`);
    }
    const ghibliMovieData =  res.data;
    return ghibliMovieData;
  } catch (error) {
    console.log("Error fetching Ghibli Movie data", error);
    return null;
  }
};

