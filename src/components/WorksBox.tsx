import React from 'react';
import styled from 'styled-components';

interface WorkBoxProps {
  align: 'leftImg' | 'rightImg';
  work: Work;
}

interface Work {
  name: string;
  description: string;
  stack: string[];
  image: string;
  www: string;
  github: string;
}

interface StyledWorkBoxProps {
  align: 'leftImg' | 'rightImg';
}

const StyledWorksBox = styled.div<StyledWorkBoxProps>`
  display: flex;
  flex-direction: ${(props) => (props.align === 'leftImg' ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 50px;
  border: 3px dashed rgba(255, 255, 255, 0);
  border-radius: 20px;
  transition: all 0.2s ease-in-out;

  @media (max-width: 1340px) {
    flex-direction: column-reverse;
    width: 80%;
  }

  @media (max-width: 780px) {
    flex-direction: column-reverse;
    width: 100%;
  }

  @media (max-width: 425px) {
    padding: 0;
    border: none;
    margin-bottom: 100px;
  }

  @media (hover: hover) {
    &:hover {
      border: 3px dashed ${(props) => props.theme.primary};
    }
  }

  .work__info {
    width: 40%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1340px) {
      width: 100%;
      margin: 0;
    }

    &-name {
      margin-left: ${(props) => (props.align === 'leftImg' ? 0 : 'auto')};
      margin-right: ${(props) => (props.align === 'rightImg' ? 0 : 'auto')};
      margin-bottom: 20px;
      font-weight: 600;
      font-size: 28px;
      line-height: 34px;
      text-align: right;
      color: ${(props) => props.theme.text};

      @media (max-width: 1340px) {
        margin: 0 auto;
        margin-bottom: 20px;
      }
    }

    &-description {
      padding: 15px;
      background-color: ${(props) => props.theme.backgroundLighter};
      border-radius: 10px;
      margin-bottom: 20px;

      p {
        font-weight: normal;
        font-size: 16px;
        line-height: 25px;
        text-align: ${(props) => (props.align === 'leftImg' ? 'left' : 'right')};
        letter-spacing: 0.025em;
        color: ${(props) => props.theme.text};

        @media (max-width: 1340px) {
          text-align: left;
        }
      }
    }

    &-stack {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: ${(props) => (props.align === 'leftImg' ? 'flex-start' : 'flex-end')};
      margin-bottom: 10px;

      @media (max-width: 1340px) {
        justify-content: flex-start;
      }

      span {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        margin-left: ${(props) => (props.align === 'leftImg' ? '0px' : '15px')};
        margin-right: ${(props) => (props.align === 'leftImg' ? '15px' : '0px')};
        margin-bottom: 10px;
        color: ${(props) => props.theme.secondary};

        @media (max-width: 1340px) {
          margin-left: 15px;
          margin-right: 15px;
        }
      }
    }

    &-links {
      display: flex;
      align-items: center;
      justify-content: ${(props) => (props.align === 'leftImg' ? 'flex-start' : 'flex-end')};

      @media (max-width: 1340px) {
        justify-content: flex-start;
      }

      a {
        margin-left: ${(props) => (props.align === 'leftImg' ? '0px' : '10px')};
        margin-right: ${(props) => (props.align === 'leftImg' ? '10px' : '0px')};

        @media (max-width: 1340px) {
          margin-left: 10px;
          margin-right: 0px;
        }
      }
    }
  }

  .image {
    width: 55%;
    margin-left: ${(props) => (props.align === 'leftImg' ? '0px' : '20px')};
    margin-right: ${(props) => (props.align === 'leftImg' ? '20px' : '0px')};
    border-radius: 20px;
    transition: all 0.5s ease-in-out;

    @media (max-width: 1340px) {
      width: 100%;
      margin: 0;
      margin-bottom: 20px;
    }

    img {
      height: 350px;
      border-radius: 26px;
    }

    img {
      @media (max-width: 1340px) {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @media (max-width: 780px) {
        height: 100%;
      }
    }
  }
`;

const WorksBox: React.FC<WorkBoxProps> = ({ align, work }) => {
  return (
    <StyledWorksBox align={align}>
      <div className="work__info">
        <h2 className="work__info-name">{work.name}</h2>
        <div className="work__info-description">
          <p>{work.description}</p>
        </div>
        <div className="work__info-stack">
          {work.stack &&
            work.stack.map((stack, index) => <span key={`${stack}${index}`}>{stack}</span>)}
        </div>
        <div className="work__info-links">
          <a href={work.github} target="_blank" rel="noreferrer">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.5 3.46362C14.8392 3.46377 11.298 4.76651 8.50991 7.13872C5.72181 9.51093 3.86877 12.7978 3.28237 16.4113C2.69597 20.0247 3.41447 23.7289 5.30931 26.8611C7.20414 29.9933 10.1517 32.349 13.6245 33.5068C14.3953 33.6418 14.6844 33.1793 14.6844 32.7745C14.6844 32.4084 14.6651 31.1943 14.6651 29.9032C10.7916 30.6162 9.78954 28.959 9.48121 28.0918C9.13908 27.2484 8.59672 26.501 7.901 25.9141C7.36142 25.6251 6.59059 24.9121 7.88172 24.8928C8.37472 24.9463 8.84757 25.1179 9.26018 25.3929C9.6728 25.668 10.013 26.0385 10.252 26.473C10.4629 26.8518 10.7464 27.1852 11.0864 27.4542C11.4263 27.7233 11.816 27.9226 12.2331 28.0407C12.6502 28.1589 13.0866 28.1936 13.5171 28.1428C13.9476 28.092 14.3639 27.9568 14.7421 27.7449C14.8089 26.9611 15.1582 26.2283 15.725 25.6829C12.2948 25.2975 8.71038 23.9678 8.71038 18.071C8.68871 16.5388 9.2541 15.0563 10.2906 13.9277C9.81927 12.5961 9.87442 11.1347 10.4448 9.84231C10.4448 9.84231 11.7359 9.43761 14.6843 11.4225C17.2069 10.7287 19.8701 10.7287 22.3927 11.4225C25.3411 9.41836 26.6323 9.84231 26.6323 9.84231C27.2027 11.1347 27.2578 12.5961 26.7864 13.9277C27.826 15.0544 28.3919 16.5381 28.3666 18.071C28.3666 23.9871 24.763 25.2975 21.3328 25.6829C21.7007 26.0558 21.9841 26.5036 22.1636 26.9957C22.3432 27.4878 22.4147 28.0128 22.3734 28.535C22.3734 30.597 22.3541 32.2543 22.3541 32.7746C22.3541 33.1793 22.6432 33.6611 23.414 33.5069C26.8807 32.3396 29.8198 29.9784 31.7065 26.8446C33.5933 23.7108 34.3049 20.0085 33.7145 16.3986C33.124 12.7886 31.2699 9.50599 28.483 7.13666C25.6961 4.76733 22.1579 3.46553 18.5 3.46362Z"
                fill="#CEC2FF"
              />
            </svg>
          </a>
          <a href={work.www} target="_blank" rel="noreferrer">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M27.5 15C27.1685 15 26.8505 15.1317 26.6161 15.3661C26.3817 15.6005 26.25 15.9185 26.25 16.25V25C26.25 25.6906 25.6906 26.25 25 26.25H5C4.30938 26.25 3.75 25.6906 3.75 25V5C3.75 4.30938 4.30938 3.75 5 3.75H13.75C14.0815 3.75 14.3995 3.6183 14.6339 3.38388C14.8683 3.14946 15 2.83152 15 2.5C15 2.16848 14.8683 1.85054 14.6339 1.61612C14.3995 1.3817 14.0815 1.25 13.75 1.25H5C2.92906 1.25 1.25 2.92906 1.25 5V25C1.25 27.0709 2.92906 28.75 5 28.75H25C27.0709 28.75 28.75 27.0709 28.75 25V16.25C28.75 15.9185 28.6183 15.6005 28.3839 15.3661C28.1495 15.1317 27.8315 15 27.5 15ZM28.75 2.5V10C28.75 10.3315 28.6183 10.6495 28.3839 10.8839C28.1495 11.1183 27.8315 11.25 27.5 11.25C27.1685 11.25 26.8505 11.1183 26.6161 10.8839C26.3817 10.6495 26.25 10.3315 26.25 10V5.5175L16.0091 15.7581C15.773 15.9841 15.4578 16.1086 15.131 16.105C14.8043 16.1014 14.4919 15.9699 14.2608 15.7388C14.0298 15.5078 13.8984 15.1954 13.8949 14.8686C13.8913 14.5418 14.0159 14.2267 14.2419 13.9906L24.4822 3.75H20C19.6685 3.75 19.3505 3.6183 19.1161 3.38388C18.8817 3.14946 18.75 2.83152 18.75 2.5C18.75 2.16848 18.8817 1.85054 19.1161 1.61612C19.3505 1.3817 19.6685 1.25 20 1.25H27.5C27.8315 1.25 28.1495 1.3817 28.3839 1.61612C28.6183 1.85054 28.75 2.16848 28.75 2.5Z"
                fill="#CEC2FF"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="image">
        <img src={work.image} alt="crypto" />
      </div>
    </StyledWorksBox>
  );
};

export default WorksBox;
