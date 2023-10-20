import styled from "styled-components";
import { Card } from "../../components";
import { useMovie } from "../../context/MovieContext";
import { BREAKPOINTS } from "../../utils";

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

  /* @media (min-width: ${BREAKPOINTS.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${BREAKPOINTS.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${BREAKPOINTS.xl}) {
  } */
`;

interface Movie {
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
}

type MoveData = {
  data: Movie[];
};

export const Trending = ({ data }: MoveData) => {
  const { layout } = useMovie();

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
                />
              </>
            );
          }
        )
      ) : (
        <div>none</div>
      )}
    </StyledMainContent>
  );
};
