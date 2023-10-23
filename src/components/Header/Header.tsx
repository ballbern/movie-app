import { TbSquareRoundedLetterM } from "react-icons/tb";
import { StyledHeader, StyledHeaderLogo } from "./styles";
import { Toggle } from "../Toggle/Toggle";
import { useMovie } from "../../context/MovieContext";
import React from "react";

export const Header = () => {
  const { toggleTheme } = useMovie();
  const [checked, setChecked] = React.useState(false);

  const handleToggle = () => setChecked(!checked);

  React.useEffect(() => toggleTheme(checked), [checked, toggleTheme]);

  return (
    <StyledHeader>
      <StyledHeaderLogo>
        <TbSquareRoundedLetterM size={"4rem"} />
        <span>ovie app</span>
      </StyledHeaderLogo>
      <Toggle onClick={() => handleToggle()} checked={checked} />
    </StyledHeader>
  );
};
