import axios from "axios";

export const getData = () => {
  return axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=2ba9f3492d57f79d787719c59122c520"
    )
    .then(res => res.data);
};
