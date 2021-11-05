import React from 'react';
import styled from 'styled-components';
import { calculateScrollDistance } from '../helpers/scrollProgress';

interface ScrollProgressProps {
  scroll: string;
}

const ScrollProgress = styled.div<ScrollProgressProps>`
  position: fixed;
  top: 0;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.secondary} ${(props) => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 3px;
  z-index: 1000;
  transition: background 0.5s ease-in-out;
`;

const ScrollBar: React.FC = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        setScrollPosition(calculateScrollDistance());
      });
    });
  }, []);
  return <ScrollProgress scroll={scrollPosition + '%'} />;
};

export default ScrollBar;
