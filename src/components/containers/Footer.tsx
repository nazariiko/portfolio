import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import logo from '../../assets/icons/logo.svg';

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    cursor: pointer;
    margin-bottom: 35px;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.025em;
    color: ${(props) => props.theme.text};
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Link to="hello" smooth={true} offset={-200} duration={500}>
          <img src={logo} alt="logo" />
        </Link>
        <p>© 2021 Nazarii Kovalenko</p>
      </FooterContent>
    </StyledFooter>
  );
};

export default React.memo(Footer);
