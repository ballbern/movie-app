import styled from "styled-components";

type StyledCardProps = {
  rotate: string;
  id: number;
};

export const StyledCard = styled.div<StyledCardProps>`
  position: relative;
  display: flex;
  flex-direction: ${({ rotate }) => (rotate === "true" ? "row" : "column")};
  justify-content: ${({ rotate }) =>
    rotate === "true" ? "center" : "space-between"};
  border: 1px solid var(--card-background-color);
  background-color: var(--card-background-color);
  cursor: pointer;
  transform: rotateY(
    ${({ rotate }) => (rotate === "true" ? "360deg" : "0deg")}
  );
  color: var(--text-color);

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
`;
