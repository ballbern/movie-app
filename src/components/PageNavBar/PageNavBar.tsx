import { StyledPageNavBar } from "./styles";
import { Button } from "../Button/Button";
import styled from "styled-components";
import { useMovie } from "../../context/MovieContext";
import { GrPrevious, GrNext } from "react-icons/gr";

const StyledPageNav = styled.span`
  display: flex;
  align-items: center;

  & > button > svg > polyline {
    stroke: var(--nav-icon-color);
  }

  & > span {
    color: var(--text-color);
    margin-bottom: 0.2rem;
  }
`;

export const PageNavBar = () => {
  const { prevPage, nextPage, page } = useMovie();

  return (
    <StyledPageNavBar>
      <StyledPageNav>
        <Button
          disabled={page <= 1 && true}
          hasborder={"false"}
          onClick={prevPage}
        >
          <GrPrevious size={"20px"} />
        </Button>
        <span>{page}</span>
        <Button hasborder={"false"} onClick={nextPage}>
          <GrNext size={"20px"} />
        </Button>
      </StyledPageNav>
    </StyledPageNavBar>
  );
};
