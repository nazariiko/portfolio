import React from 'react';
import ReactDOM from 'react-dom';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import App from './App';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }
  body {
    background-color: ${theme.background};
    font-family: 'Montserrat', sans-serif;
    color: ${theme.text};
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.025em;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
