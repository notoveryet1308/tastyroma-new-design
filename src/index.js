import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyle } from './stylesheet/global.style';
import { GlobalFonts } from './fonts/font';
import theme from './theme/theme.json';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
          <GlobalFonts />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
