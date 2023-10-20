import { TbSquareRoundedLetterM } from "react-icons/tb";
import { StyledHeader, StyledHeaderLogo } from "./styles";
import { Toggle } from "../Toggle/Toggle";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo>
        <TbSquareRoundedLetterM size={"4rem"} />
        <span>ovie app</span>
      </StyledHeaderLogo>
      <Toggle style={{ marginRight: "2rem" }} />
    </StyledHeader>
  );
};
