import { useQuery } from "react-query";
import axios from "axios";

// https://api.themoviedb.org/3/discover/tv?
// https://api.themoviedb.org/3/trending/movie/day

//? useQuery Notes:
//  you can configure how long info will be cached by setting the prop { cacheTime: 5000 } in useQuery.
//  you can configure refetchOnMount to specify if the component should refetch when the component mounts.
//  you can configure refetchOnWindowFocus (true, false, always) to specify if the component should refetch when the component is focused.
// refetchInterval will refetch data after a set time (only works when window is focused).
// refetchIntervalInBackground will fetch data in background even when window is not focused.
/* can use the select prop to select what data you want to return to data i.e. > 
  select: (data) => {
    const jestTitle = data.map(({ title }) => title );
    return justTitle;
  }
  */

const apiKey = "2ba9f3492d57f79d787719c59122c520";

export const getData = async (page = 1) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}`
    )
    .then(res => res.data);
};

export const useMovieQuery = (page?: number) => {
  return useQuery({
    queryKey: ["trending", page],
    queryFn: () => getData(page),
    keepPreviousData: true,
    staleTime: 5000,
    enabled: true,
  });
};
