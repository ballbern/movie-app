import styled, { css } from "styled-components";
import { ButtonProps } from "../Button";

type StyledButtonProps = Pick<ButtonProps, "hasborder" | "active">;

export const StyledButton = styled.button<StyledButtonProps>`
  background: none;
  border: ${({ hasborder, active }) =>
    hasborder === "true"
      ? `solid 2px ${
          !active ? "var(--button-color)" : "var(--button-active-color)"
        }`
      : "none"};
  color: ${({ active }) =>
    !active ? "var(--button-color)" : "var(--button-active-color)"};
  border-radius: 0.2rem;
  padding: 0.3rem 0.6rem;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  &:hover {
    border: ${({ hasborder }) =>
      hasborder === "true" ? "solid 2px var(--layout-icon-color)" : "none"};
    color: var(--button-color);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;
