import styled from "styled-components";

export const StyledPosterContent = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StylePosterInfo = styled.div`
  display: flex;
  gap: 1rem;

  & p {
    font-size: 14px;
    height: 194px;
    overflow: auto;
    padding: 0 1.5rem 0 0;
    line-height: 1.5rem;
    color: var(--text-color);
  }

  & div:first-child > img {
    padding: 1.5rem 0 0 1rem;
  }

  & header {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    gap: 0.5rem;

    & > div:first-child {
      font-size: 30px;
      font-weight: 900;
      color: var(--text-color);
    }

    & > div:last-child {
      font-size: 1.1em;
      font-weight: 200;
      color: var(--text-color);
    }
  }

  & > div:last-child > div {
    padding: 1.2rem 0 0 0;
  }
`;

export const StyledPosterFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem 1rem 1.5rem;
  color: var(--text-color);
`;
