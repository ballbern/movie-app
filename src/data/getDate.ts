import axios from "axios";

// https://api.themoviedb.org/3/discover/tv?
// https://api.themoviedb.org/3/trending/movie/day

const apiKey = "2ba9f3492d57f79d787719c59122c520";

//todo remove this file...

export const getData = async (page = 1) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}`
    )
    .then(res => res.data);
};
