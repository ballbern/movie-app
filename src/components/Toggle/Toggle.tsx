import { StyledToggle } from "./styles";

export const Toggle = ({ ...props }) => {
  return (
    <StyledToggle {...props}>
      <input type='checkbox' checked />
      <span></span>
    </StyledToggle>
  );
};
