// 2ba9f3492d57f79d787719c59122c520
// https://api.themoviedb.org/3/discover/movie?
// Promise.reject("error")
// import { useQuery, useMutation, useQueryClient } from "react-query";

import { useQuery } from "react-query";
import { getData } from "./data/getDate";
import { Header, ControlsBar, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import { Trending, Movies, TV } from "./pages";
import { MovieProvider } from "./context/MovieContext";

function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["trending"],
    queryFn: () => getData(),
  });

  if (isLoading) return <h1>...loading</h1>;
  if (isError) return <pre>{JSON.stringify(error)}</pre>;

  return (
    <MovieProvider>
      <Header />
      <ControlsBar />
      <Routes>
        <Route path='/' element={<Trending data={data.results} />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tv' element={<TV />} />
      </Routes>
      <Footer />
    </MovieProvider>
  );
}

export default App;
