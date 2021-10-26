import React from 'react';
import styled from 'styled-components';

import NavigationItem from '../NavigationItem';
import SkillsTable from '../SkillsBox';

import skills from '../../data/skills';

const StyledSkills = styled.div`
  width: 100%;
  margin-bottom: 200px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 780px) {
    margin-bottom: 100px;
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

const Heading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 70px;
  margin-left: auto;

  @media (max-width: 1100px) {
    justify-content: center;
    margin: 0;
    margin-bottom: 40px;
  }

  .leftRect {
    width: 340px;
    height: 5px;
    background: ${(props) => props.theme.backgroundLighter};
    transition: all 0.5s ease-in-out;

    @media (max-width: 1100px) {
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
    width: 100px;
    height: 5px;
    background: ${(props) => props.theme.backgroundLighter};
    transition: all 0.5s ease-in-out;

    @media (max-width: 1100px) {
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

const MySkills = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1340px) {
    justify-content: center;
    width: 100%;
  }

  & > div:first-child {
    @media only screen and (min-width: 780px) and (max-width: 1340px) {
      margin-right: 30px;
    }
  }
`;

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <div className="container">
        <div className="wrapper">
          <Heading>
            <div className="leftRect"></div>
            <NavigationItem number={'02.'} text={'Skills'} fontSize={'26px'} />
            <div className="rigthRect"></div>
          </Heading>
          <MySkills>
            <SkillsTable heading={Object.keys(skills)[0]} skills={Object.values(skills)[0]} />
            <SkillsTable heading={Object.keys(skills)[1]} skills={Object.values(skills)[1]} />
          </MySkills>
        </div>
      </div>
    </StyledSkills>
  );
};

export default React.memo(Skills);
