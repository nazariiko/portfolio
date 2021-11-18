import React from 'react';
import styled from 'styled-components';

import NavigationItem from '../NavigationItem';
import WorksBox from '../WorksBox';

import works from '../../data/works';

const StyledWorks = styled.div`
  width: 100%;
  margin-bottom: 100px;

  @media (max-width: 425px) {
    margin-bottom: 0px;
  }

  .container {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0px 20px;

    .wrapper {
      display: flex;
      flex-direction: column;

      @media (max-width: 1100px) {
        justify-content: center;
        width: 100%;
      }
    }
  }
`;

const MyWorks = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1340px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 70px;

  @media (max-width: 1340px) {
    justify-content: center;
    margin-bottom: 40px;
  }

  .leftRect {
    width: 100px;
    height: 5px;
    background: ${(props) => props.theme.backgroundLighter};
    transition: all 0.5s ease-in-out;

    @media (max-width: 1340px) {
      width: 200px;
    }
    @media (max-width: 780px) {
      width: 100px;
    }
    @media (max-width: 425px) {
      width: 70px;
    }
  }

  .rigthRect {
    width: 340px;
    height: 5px;
    background: ${(props) => props.theme.backgroundLighter};
    transition: all 0.5s ease-in-out;

    @media (max-width: 1340px) {
      width: 200px;
    }
    @media (max-width: 780px) {
      width: 100px;
    }
    @media (max-width: 425px) {
      width: 70px;
    }
  }
`;

const Works = () => {
  return (
    <StyledWorks id="works">
      <div className="container">
        <div className="wrapper">
          <Heading>
            <div className="leftRect"></div>
            <NavigationItem number={'03.'} text={'Works'} fontSize={'26px'} />
            <div className="rigthRect"></div>
          </Heading>
          <MyWorks>
            <WorksBox align={'rightImg'} work={works[0]} />
            <WorksBox align={'leftImg'} work={works[1]} />
            <WorksBox align={'rightImg'} work={works[2]} />
            <WorksBox align={'leftImg'} work={works[3]} />
            <WorksBox align={'rightImg'} work={works[4]} />
          </MyWorks>
        </div>
      </div>
    </StyledWorks>
  );
};

export default React.memo(Works);
