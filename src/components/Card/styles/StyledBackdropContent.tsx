import styled from "styled-components";

export const StyledBackdropContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  max-height: 2rem;

  & span:nth-child(1) {
    margin: 0;
    font-size: 1em;
    font-weight: 600;
  }

  & > span:nth-child(2) {
    margin-left: 0.5rem;
  }
`;
