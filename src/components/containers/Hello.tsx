import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import Button from '../Button';
import Paragraph from '../Paragraph';

import myPhoto from '../../assets/images/me.jpg';

interface StyledHeadingProps {
  mb?: number;
}

const StyledHello = styled.div`
  width: 100%;
  margin-top: 200px;
  margin-bottom: 220px;
  padding: 0px 70px;
  background-color: ${(props) => props.theme.background};
  transition: all 0.5s ease-in-out;

  @media (max-width: 425px) {
    margin-top: 130px;
    margin-bottom: 130px;
    padding: 0px 15px;
  }
  @media only screen and (max-width: 760px) and (min-width: 425px) {
    margin-top: 160px;
    margin-bottom: 140px;
    padding: 0px 25px;
  }

  .container {
    max-width: 1170px;
    margin: 0 auto;

    .wrapper {
      display: flex;

      @media (max-width: 1100px) {
        justify-content: center;
        width: 100%;
      }
    }
  }
`;

const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 1100px) {
    width: 100%;
    justify-content: center;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: ${(props) => props.theme.primary};
    margin-bottom: 20px;
    @media (max-width: 1100px) {
      text-align: center;
    }
    @media (max-width: 425px) {
      font-size: 18px;
    }
  }

  a {
    color: inherit;
    width: fit-content;
    text-decoration: inherit;
    @media (max-width: 1100px) {
      text-align: center;
      margin: 0 auto;
    }

    button {
      @media (max-width: 425px) {
        max-width: 300px;
        width: 300px;
      }
    }
  }

  p {
    @media (max-width: 1100px) {
      text-align: center;
      width: 80%;
      margin: 0 auto;
      margin-bottom: 20px;
    }
    @media (max-width: 425px) {
      width: 100%;
    }
  }
`;

const StyledHeading = styled.h2<StyledHeadingProps>`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 52px;
  line-height: 62px;
  color: ${(props) => props.theme.text};
  margin-bottom: ${(props) => props.mb}px;
  @media (max-width: 1100px) {
    text-align: center;
    font-size: 65px;
    line-height: 80px;
  }
  @media (max-width: 425px) {
    font-size: 36px;
    line-height: 40px;
  }
`;

const StyledRigthContent = styled.div`
  .myPhotoWrapper {
    position: relative;
    @media (max-width: 1100px) {
      display: none;
    }

    .myPhoto {
      position: absolute;
      top: 0;
      left: 0;
      width: 380px;
      height: 285px;
      background: url(${myPhoto});
      background-size: 380px 285px;
      background-repeat: no-repeat;
      background-color: ${(props) => props.theme.background};
      background-blend-mode: color-dodge;
      border-radius: 10px;
      z-index: 10;

      &:hover + .backgroundDashedLines {
        transform: translate(-20px, -20px);
        box-shadow: 0px 0px 10px 5px rgba(93, 53, 255, 0.4);
      }
    }

    .backgroundDashedLines {
      position: absolute;
      z-index: 0;
      top: 20px;
      left: 20px;
      width: 380px;
      height: 285px;
      border: 2px dashed ${(props) => props.theme.primary};
      border-radius: 10px;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const Hello = () => {
  return (
    <StyledHello id="hello">
      <div className="container">
        <div className="wrapper">
          <StyledLeftContent>
            <span>Hi, my name is</span>
            <StyledHeading>Nazarii Kovalenko.</StyledHeading>
            <StyledHeading mb={25}>I build things for the web.</StyledHeading>
            <Paragraph mb={15} width={510}>
              I like to design and create web interfaces with ReactJS. If you are interested in me,
              take a look at{' '}
              <Link to="works" smooth={true} offset={-150} duration={500}>
                <span>examples of my work.</span>
              </Link>
            </Paragraph>
            <Paragraph mb={30} width={430}>
              If you have job offers then write to my telegram
            </Paragraph>
            <a href="https://t.me/nazariikovalenko">
              <Button onClick={() => {}}>Get in touch</Button>
            </a>
          </StyledLeftContent>
          <StyledRigthContent>
            <div className="myPhotoWrapper">
              <div className="myPhoto"></div>
              <div className="backgroundDashedLines"></div>
            </div>
          </StyledRigthContent>
        </div>
      </div>
    </StyledHello>
  );
};

export default React.memo(Hello);
