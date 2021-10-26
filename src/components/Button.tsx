import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: string | React.ReactNode;
  outlined?: boolean;
  onClick: () => void;
  className?: string;
}

interface StyledButtonProps {
  outlined: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: block;
  max-width: 200px;
  height: 50px;
  padding: 0px 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  background-color: ${(props) => (props.outlined ? 'inherit' : props.theme.primary)};
  color: ${(props) => (props.outlined ? props.theme.secondary : props.theme.text)};
  border-radius: 10px;
  outline: none;
  border: ${(props) => (props.outlined ? `2px solid ${props.theme.secondary}` : 'none')};
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.outlined ? props.theme.backgroundLighter : props.theme.primaryDarker};
  }

  &:active {
    background-color: ${(props) =>
      props.outlined ? props.theme.backgroundDarker : props.theme.primaryLighter};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, onClick, outlined = false, className }) => {
  return (
    <StyledButton className={className} onClick={onClick} outlined={outlined}>
      {children}
    </StyledButton>
  );
};

export default React.memo(Button);
