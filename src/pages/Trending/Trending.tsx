import styled from "styled-components";
import { Card } from "../../components";
import { useMovie } from "../../context/MovieContext";
import { useMovieQuery } from "../../hooks/useMovieQuery";

type StyledMainContentProps = {
  layout: number;
};

const StyledMainContent = styled.main<StyledMainContentProps>`
  display: grid;
  grid-template-columns: ${({ layout }) => `repeat(${layout}, 1fr)`};
  margin: 0 auto;
  width: ${({ layout }) => (layout !== 1 ? "80%" : "40%")};
  gap: 1rem;
  margin-bottom: 3rem;
`;

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MoveData = {
  data: Movie[];
  isLoading: boolean;
  isFetching: boolean;
};

export const Trending = ({ data }: MoveData) => {
  const { layout } = useMovie();
  const { isLoading, isFetching, isError, error } = useMovieQuery();

  if (isLoading)
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        ...loading
      </h1>
    );
  if (isError) return <pre>{JSON.stringify(error)}</pre>;
  if (isFetching) return <div>...isFetching</div>;

  return (
    <StyledMainContent layout={layout}>
      {data ? (
        data.map(
          ({
            backdrop_path,
            title,
            vote_average,
            poster_path,
            release_date,
            overview,
            vote_count,
            id,
          }: Movie) => {
            return (
              <>
                <Card
                  backdropPath={backdrop_path}
                  title={title}
                  voteAverage={vote_average}
                  posterPath={poster_path}
                  releaseDate={release_date}
                  overview={overview}
                  voteCount={vote_count}
                  id={id}
                />
              </>
            );
          }
        )
      ) : (
        <div>No Data</div>
      )}
    </StyledMainContent>
  );
};
