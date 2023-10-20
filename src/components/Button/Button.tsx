import { StyledButton } from "./styles";
import React from "react";

export type ButtonProps = {
  children: React.ReactElement | string;
  onClick?: () => void;
  hasBorder?: boolean | undefined;
  active?: boolean | undefined;
};

export const Button = ({
  children,
  onClick,
  hasBorder = true,
  active = false,
}: ButtonProps) => {
  const activeButton = React.useMemo(() => {
    return active;
  }, [active]);

  return (
    <StyledButton active={activeButton} hasBorder={hasBorder} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
