import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import Routes from './routes';

// import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </ThemeProvider>
);

export default App;
