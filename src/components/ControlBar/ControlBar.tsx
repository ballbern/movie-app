import {
  TfiLayoutColumn2,
  TfiLayoutColumn3,
  TfiLayoutWidthFull,
} from "react-icons/tfi";
import { GrPrevious, GrNext } from "react-icons/gr";
import { StyledControlsBar } from "./styles";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
import { useMovie } from "../../context/MovieContext";
import styled from "styled-components";

const StyledPageNav = styled.span`
  display: flex;
  align-items: center;
`;

export const ControlsBar = () => {
  const { gridLayout, layout, prevPage, nextPage, page } = useMovie();

  return (
    <>
      <StyledControlsBar>
        <span
          style={{
            display: "flex",
            justifySelf: "start",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to='/'>
            {({ isActive }) => <Button active={isActive}>Trending</Button>}
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to='/movies'>
            {({ isActive }) => <Button active={isActive}>Movies</Button>}
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to='/tv'>
            {({ isActive }) => <Button active={isActive}>TV</Button>}
          </NavLink>
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
        </span>

        <span style={{ display: "flex", justifySelf: "end" }}>
          <Button
            hasborder={"false"}
            active={layout === 3}
            onClick={() => gridLayout(3)}
          >
            <TfiLayoutColumn3 size={"25px"} />
          </Button>
          <Button
            hasborder={"false"}
            active={layout === 2}
            onClick={() => gridLayout(2)}
          >
            <TfiLayoutColumn2 size={"25px"} />
          </Button>
          <Button
            hasborder={"false"}
            active={layout === 1}
            onClick={() => gridLayout(1)}
          >
            <TfiLayoutWidthFull size={"25px"} />
          </Button>
        </span>
      </StyledControlsBar>
    </>
  );
};
