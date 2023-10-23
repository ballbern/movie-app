import { StyledToggle } from "./styles";

type ToggleProps = {
  checked: boolean;
  onClick: () => void;
};

export const Toggle = ({ checked, onClick, ...props }: ToggleProps) => {
  return (
    <StyledToggle {...props}>
      <input onClick={onClick} type='checkbox' checked={checked} />
      <span></span>
    </StyledToggle>
  );
};
