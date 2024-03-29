import styled from "styled-components";

export const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 3.125rem;
  height: 1.625rem;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: var(--toggle-background-color);
    }

    &:focus + span {
      box-shadow: 0 0 1px var(--blue);
    }

    &:checked + span:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
      left: -1px;
    }
  }

  & > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--toggle-background-color);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 2px;
      bottom: 1px;
      background-color: var(--white);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`;
