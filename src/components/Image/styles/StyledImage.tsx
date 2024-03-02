import styled from "styled-components";
type StyledImageProps = {
  media?: { sm: number; md: number; lg: number };
};

export const StyledImage = styled.img<StyledImageProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  object-fit: contain;

  @media screen and (max-width: 1200px) {
    /* max-width: ${({ media }) => (media ? `${media?.sm}px` : "100%")}; */
  }
`;
