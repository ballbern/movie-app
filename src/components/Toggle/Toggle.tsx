import { StyledToggle } from "./styles";

type ToggleProps = {
  checked: boolean;
  onChange: () => void;
};

export const Toggle = ({ checked, onChange, ...props }: ToggleProps) => {
  return (
    <StyledToggle {...props}>
      <input onChange={onChange} type='checkbox' checked={checked} />
      <span></span>
    </StyledToggle>
  );
};
