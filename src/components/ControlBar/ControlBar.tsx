import {
  TfiLayoutColumn2,
  TfiLayoutColumn3,
  TfiLayoutWidthFull,
} from "react-icons/tfi";
import { StyledControlsBar } from "./styles";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
import { useMovie } from "../../context/MovieContext";
import { PageNavBar } from "../PageNavBar/PageNavBar";

export const ControlsBar = () => {
  const { gridLayout, layout } = useMovie();

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
          <PageNavBar />
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
