import styled from 'styled-components';

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

export default ScrollProgress;
