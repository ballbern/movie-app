import { TbSquareRoundedLetterM } from "react-icons/tb";
import { StyledHeader, StyledHeaderLogo } from "./styles";
import { Toggle } from "../Toggle/Toggle";
import { useMovie } from "../../context/MovieContext";
import React, { useState } from "react";

export const Header = () => {
  const { toggleTheme } = useMovie();
  const [checked, setChecked] = useState(false);

  const handleToggle = () => setChecked(!checked);

  React.useEffect(() => toggleTheme(checked), [checked, toggleTheme]);

  return (
    <StyledHeader>
      <StyledHeaderLogo>
        <TbSquareRoundedLetterM size={"4rem"} />
        <span>ovie app</span>
      </StyledHeaderLogo>
      <Toggle onChange={() => handleToggle()} checked={checked} />
    </StyledHeader>
  );
};
