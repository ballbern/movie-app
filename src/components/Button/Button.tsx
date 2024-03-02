import { StyledButton } from "./styles";
import React from "react";

export type ButtonProps = {
  children: React.ReactElement | string;
  onClick?: () => void;
  hasborder?: string | undefined;
  active?: boolean | undefined;
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  hasborder = "true",
  active = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  const activeButton = React.useMemo(() => {
    return active;
  }, [active]);

  return (
    <StyledButton
      active={activeButton}
      hasborder={hasborder}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
