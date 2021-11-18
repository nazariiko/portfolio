import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import NavigationItem from '../NavigationItem';
import BurgerSocial from '../BurgerSocial';
import Button from '../Button';

interface BurgerMenuProps {
  onClose: () => void;
}

const StyledBurgerMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.background};

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Close = styled.div`
  position: absolute;
  top: 35px;
  right: 20px;
  cursor: pointer;
`;

const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClose }) => {
  return (
    <StyledBurgerMenu>
      <Navigation>
        <Link
          style={{ marginRight: 0 }}
          onClick={onClose}
          to="about"
          smooth={true}
          offset={-150}
          duration={500}>
          <NavigationItem number={'01.'} text={'About'} dashed fontSize="32px" />
        </Link>
        <Link
          style={{ marginRight: 0 }}
          onClick={onClose}
          to="skills"
          smooth={true}
          offset={-150}
          duration={500}>
          <NavigationItem number={'02.'} text={'Skills'} dashed fontSize="32px" />
        </Link>
        <Link
          style={{ marginRight: 0 }}
          onClick={onClose}
          to="works"
          smooth={true}
          offset={-150}
          duration={500}>
          <NavigationItem number={'03.'} text={'Works'} dashed fontSize="32px" />
        </Link>
        <Link
          style={{ marginRight: 0 }}
          onClick={onClose}
          className="last-navigatio-item"
          to="contacts"
          smooth={true}
          offset={-150}
          duration={500}>
          <NavigationItem number={'04.'} text={'Contacts'} dashed fontSize="32px" />
        </Link>
      </Navigation>
      <BurgerSocial />
      <a
        href="https://drive.google.com/file/d/1CbiWsol11TgZ_vgzwxa2DzuuB5FGUV9h/view?usp=sharing"
        target="_blank"
        rel="noreferrer">
        <Button outlined onClick={() => {}}>
          Resume
        </Button>
      </a>
      <Close onClick={onClose}>
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line
            x1="2"
            y1="24.8787"
            x2="24.8787"
            y2="2"
            stroke="#ED4EBA"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="2.12132"
            y1="2"
            x2="25"
            y2="24.8787"
            stroke="#ED4EBA"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </Close>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
