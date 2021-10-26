import React from 'react';
import styled from 'styled-components';

interface ParagraphProps {
  children: string | React.ReactNode;
  width?: number;
  mb?: number;
  align?: 'left' | 'center' | 'right';
}

interface StyledParagraphProps {
  mb?: number;
  width?: number;
  align: 'left' | 'center' | 'right';
}

const StyledParagraph = styled.p<StyledParagraphProps>`
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.025em;
  color: ${(props) => props.theme.text};
  margin-bottom: ${(props) => props.mb}px;
  width: ${(props) => props.width}px;
  text-align: ${(props) => props.align};

  span {
    cursor: pointer;
  }
`;

const Paragraph: React.FC<ParagraphProps> = ({ children, width, mb, align = 'left' }) => {
  return (
    <StyledParagraph width={width} mb={mb} align={align}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
