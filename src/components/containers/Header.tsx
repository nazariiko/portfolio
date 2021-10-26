import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import Button from '../Button';
import NavigationItem from '../NavigationItem';
import BurgerMenu from './BurgerMenu';

import logo from '../../assets/icons/logo.svg';
import { useWindowSize } from '../../hooks/useWindowSize';

const StyledHeader = styled.header`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: rgba(30, 14, 55, 0.6);
  backdrop-filter: blur(10px);

  a {
    margin-right: auto;
    cursor: pointer;
  }

  a:last-child {
    margin-right: 20px;
  }

  .header__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a:nth-child(4) {
      margin-right: 20px;
    }

    @media (max-width: 900px) {
      display: none;
    }
  }

  .burger-navigation {
    background-color: rgba(255, 255, 255, 0);
    padding: 0;

    @media (min-width: 900px) {
      display: none;
    }
  }
`;

const Header = () => {
  const [burgerMenuVisibility, setBurgerMenuVisibility] = React.useState<boolean>(false);
  const { width } = useWindowSize();

  const handleClickBurgerMenu = () => {
    setBurgerMenuVisibility(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseBurgerMenu = () => {
    setBurgerMenuVisibility(false);
    document.body.style.overflow = 'visible';
  };

  React.useEffect(() => {
    if (width && width > 900) {
      handleCloseBurgerMenu();
    }
  }, [width]);

  return (
    <StyledHeader id="header">
      <Link to="hello" smooth={true} offset={-200} duration={500}>
        <img src={logo} alt="logo" />
      </Link>
      <div className="header__navigation">
        <Link to="about" smooth={true} offset={-150} duration={500}>
          <NavigationItem number={'01.'} text={'About'} dashed />
        </Link>
        <Link to="skills" smooth={true} offset={-150} duration={500}>
          <NavigationItem number={'02.'} text={'Skills'} dashed />
        </Link>
        <Link to="works" smooth={true} offset={-150} duration={500}>
          <NavigationItem number={'03.'} text={'Works'} dashed />
        </Link>
        <Link
          className="last-navigatio-item"
          to="contacts"
          smooth={true}
          offset={-150}
          duration={500}>
          <NavigationItem number={'04.'} text={'Contacts'} dashed />
        </Link>
        <Button outlined onClick={() => {}}>
          Resume
        </Button>
      </div>
      <Button className="burger-navigation" onClick={handleClickBurgerMenu}>
        <svg
          width="37"
          height="26"
          viewBox="0 0 37 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect y="0.0151367" width="36.9999" height="2.7929" rx="1.39645" fill="#ED4EBA" />
          <rect y="11.4661" width="36.9999" height="2.7929" rx="1.39645" fill="#ED4EBA" />
          <rect
            x="8.14014"
            y="22.917"
            width="28.8599"
            height="2.7929"
            rx="1.39645"
            fill="#ED4EBA"
          />
        </svg>
      </Button>
      {burgerMenuVisibility && <BurgerMenu onClose={handleCloseBurgerMenu} />}
    </StyledHeader>
  );
};

export default React.memo(Header);
