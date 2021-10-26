import React from 'react';
import styled from 'styled-components';

interface NavigationItemProps {
  number: string;
  text: string;
  fontSize?: string;
  dashed?: boolean;
}

interface StyledNavigationItemProps {
  fontSize: string;
  dashed: boolean;
}

const StyledNavigationItem = styled.div<StyledNavigationItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  border: ${(props) => (props.dashed ? `2px dashed rgba(0, 0, 0, 0)` : 'none')};
  cursor: ${(props) => (props.dashed ? 'pointer' : 'default')};

  @media (max-width: 900px) {
    margin-bottom: 20px;
  }

  @media (hover: hover) {
    &:hover {
      border: ${(props) => (props.dashed ? `2px dashed ${props.theme.secondary}` : 'none')};
      p {
        color: ${(props) => (props.dashed ? `${props.theme.secondary}` : 'inherit')};
      }
    }
  }

  span {
    color: ${(props) => props.theme.secondary};
    margin-right: 5px;
    font-size: ${(props) => props.fontSize};
  }

  p {
    font-size: ${(props) => props.fontSize};
    transition: all 0.2s ease-in-out;
  }
`;

const NavigationItem: React.FC<NavigationItemProps> = ({
  number,
  text,
  fontSize = '16px',
  dashed = false,
}) => {
  return (
    <StyledNavigationItem fontSize={fontSize} dashed={dashed}>
      <span>{number}</span>
      <p>{text}</p>
    </StyledNavigationItem>
  );
};

export default React.memo(NavigationItem);
