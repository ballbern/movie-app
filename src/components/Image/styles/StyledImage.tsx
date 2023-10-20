import styled from "styled-components";
import { BREAKPOINTS } from "../../../utils";

type StyledImageProps = {
  media?: { sm: number; md: number; lg: number };
};

export const StyledImage = styled.img<StyledImageProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  /* width: 100%; */
  /* height: 100%; */
  /* margin: 0 auto; */
  object-fit: contain;

  /* @media screen and (min-width: ${BREAKPOINTS.sm}) {
    max-width: ${({ media }) => (media ? `${media?.sm}px` : "100%")};
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    max-width: ${({ media }) => (media ? `${media?.md}px` : "100%")};
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    max-width: ${({ media }) => (media ? `${media?.lg}px` : "100%")};
  } */
`;
