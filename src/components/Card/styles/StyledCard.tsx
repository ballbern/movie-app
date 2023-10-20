import styled from "styled-components";

type StyledCardProps = {
  rotate: boolean;
};

export const StyledCard = styled.div<StyledCardProps>`
  position: relative;
  display: flex;
  flex-direction: ${({ rotate }) => (rotate ? "row" : "column")};
  justify-content: ${({ rotate }) => (rotate ? "center" : "space-between")};
  border: 1px solid var(--white);
  background-color: var(--white);
  cursor: pointer;
  transform: rotateY(${({ rotate }) => (rotate ? "360deg" : "0deg")});

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;
