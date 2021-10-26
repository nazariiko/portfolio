import React from 'react';
import styled from 'styled-components';

interface SkillsTableProps {
  heading: string;
  skills: string[];
}

const StyledSkillsBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 3px solid ${(props) => props.theme.primary};
  border-radius: 20px;
  padding: 20px 0px;
  transition: all 0.2s ease-in-out;

  @media (max-width: 780px) {
    width: 100%;
    margin-bottom: 30px;
  }

  @media (hover: hover) {
    &:hover {
      border: 3px dashed ${(props) => props.theme.primary};
      background-color: ${(props) => props.theme.backgroundLighter};
    }
  }

  h3 {
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    color: ${(props) => props.theme.text};
    margin-bottom: 30px;
  }

  .skillsList {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &__item {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: ${(props) => props.theme.primary};
      margin-bottom: 10px;
    }
  }
`;

const SkillsTable: React.FC<SkillsTableProps> = ({ heading, skills }) => {
  return (
    <StyledSkillsBox>
      <h3>{heading}</h3>
      <ul className="skillsList">
        {skills &&
          skills.map((skill, id) => (
            <li className="skillsList__item" key={`${id} ${skill}`}>
              {skill}
            </li>
          ))}
      </ul>
    </StyledSkillsBox>
  );
};

export default SkillsTable;
