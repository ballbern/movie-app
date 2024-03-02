// https://www.themoviedb.org/movie/575264-mission-impossible-dead-reckoning-part-one
// https://developer.themoviedb.org/reference/intro/getting-started

// todo finish useQuery setup
// todo integrate GraphQL
// todo if backdrop_path and/or poster_path are null, render a placeholder image to UI.

import { Header, ControlsBar, Footer, PageNavBar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Trending, Movies, TV } from "./pages";
import { useMovie } from "./context/MovieContext";
import { useMovieQuery } from "./hooks/useMovieQuery";

function App() {
  const { page } = useMovie();

  const { data, isLoading, isFetching, refetch } = useMovieQuery(page);

  return (
    <>
      <Header />
      <ControlsBar />
      <button style={{ display: "none" }} onClick={() => refetch()}>
        refetch
      </button>
      <Routes>
        <Route
          path='/'
          element={
            <Trending
              data={data?.results}
              isLoading={isLoading}
              isFetching={isFetching}
            />
          }
        />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tv' element={<TV />} />
      </Routes>
      {/* <PageNavBar /> */}
      <Footer />
    </>
  );
}

export default App;
