import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { Image } from "../Image/Image";
import {
  StyledCard,
  StyledBackdropContent,
  StyledPosterContent,
  StylePosterInfo,
  StyledPosterFooter,
} from "./styles";
import styled from "styled-components";

type CardProps = {
  backdropPath: string;
  title: string;
  voteAverage: number;
  posterPath: string;
  releaseDate: string;
  overview: string;
  voteCount: number;
};

const StyledIconText = styled.div`
  display: flex;
  align-items: end;
  gap: 0.5rem;
`;

export const Card = ({
  backdropPath,
  title,
  voteAverage,
  posterPath,
  releaseDate,
  overview,
  voteCount,
}: CardProps): React.ReactElement => {
  const [rotate, setRotate] = React.useState(false);

  const cardClick = () => setRotate(!rotate);

  return (
    <>
      <StyledCard rotate={rotate} onClick={cardClick}>
        <>
          {!rotate ? (
            <>
              <Image path={!rotate ? backdropPath : posterPath} title={title} />
              <StyledBackdropContent>
                <span>{title}</span>
                <StyledIconText>
                  <span>{voteAverage}</span>
                  <AiFillStar color='var(--star-color)' />
                </StyledIconText>
              </StyledBackdropContent>
            </>
          ) : (
            <StyledPosterContent>
              <StylePosterInfo>
                <Image width={110} path={posterPath} title={title} />
                <div>
                  <div>
                    <header>
                      <div>{title}</div>
                      <div>{releaseDate}</div>
                    </header>
                  </div>
                  <p>{overview}</p>
                </div>
              </StylePosterInfo>
              <StyledPosterFooter>
                <StyledIconText>
                  <span>{voteAverage}</span>
                  <AiFillStar color='var(--star-color)' />
                </StyledIconText>
                <StyledIconText>
                  <span>{voteCount}</span>
                  <BsFillHandThumbsUpFill color='var(--thumb-color)' />
                </StyledIconText>
              </StyledPosterFooter>
            </StyledPosterContent>
          )}
        </>
      </StyledCard>
    </>
  );
};
