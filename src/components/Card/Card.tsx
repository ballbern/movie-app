import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { Image } from "../Image/Image";
import {
  StyledCard,
  StyledBackdropContent,
  StyledBackContent,
  StyleBackInfo,
  StyledBackFooter,
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
  id: number;
};

const StyledIconText = styled.div`
  display: flex;
  align-items: end;
  gap: 0.5rem;
`;

//todo break this down into components - front and back views of card could be two different components.

export const Card = ({
  backdropPath,
  title,
  voteAverage,
  posterPath,
  releaseDate,
  overview,
  voteCount,
  id,
}: CardProps): React.ReactElement => {
  const [rotate, setRotate] = React.useState(false);

  const cardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    setRotate(!rotate);

  return (
    <StyledCard
      rotate={rotate.toString()}
      onClick={e => cardClick(e)}
      id={id}
      key={id}
    >
      <>
        {!rotate ? (
          <div id={id.toString()}>
            <Image path={!rotate ? backdropPath : posterPath} title={title} />
            <StyledBackdropContent>
              <span>{title}</span>
              <StyledIconText>
                <span>{voteAverage.toFixed(1)}</span>
                <AiFillStar color='var(--star-color)' />
              </StyledIconText>
            </StyledBackdropContent>
          </div>
        ) : (
          <StyledBackContent>
            <StyleBackInfo>
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
            </StyleBackInfo>
            <StyledBackFooter>
              <StyledIconText>
                <span>{voteAverage.toFixed(1)}</span>
                <AiFillStar color='var(--star-color)' />
              </StyledIconText>
              <StyledIconText>
                <span>{voteCount}</span>
                <BsFillHandThumbsUpFill color='var(--thumb-color)' />
              </StyledIconText>
            </StyledBackFooter>
          </StyledBackContent>
        )}
      </>
    </StyledCard>
  );
};
