import { StyledPageNavBar } from "./styles";
import { Button } from "../Button/Button";
import styled from "styled-components";
import { useMovie } from "../../context/MovieContext";
import { GrPrevious, GrNext } from "react-icons/gr";

const StyledPageNav = styled.span`
  display: flex;
  align-items: center;
`;

//todo theme is not being applied to element. need to fix this.

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
