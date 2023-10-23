import styled from "styled-components";
import { ButtonProps } from "../Button";

type StyledButtonProps = Pick<ButtonProps, "hasBorder" | "active">;

export const StyledButton = styled.button<StyledButtonProps>`
  background: none;
  border: ${({ hasBorder, active }) =>
    hasBorder
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
    border: ${({ hasBorder }) =>
      hasBorder ? "solid 2px var(--layout-icon-color)" : "none"};
    color: var(--button-color);
  }
`;
