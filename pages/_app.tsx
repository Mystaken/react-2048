import App, { Container, AppContext } from 'next/app';
import React from 'react';
import { theme } from '@2048/theme';
import { Provider } from 'react-redux';
import { store } from '@2048/redux/store';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,
  #__next {
    margin: 0px;
    height: 100vh;
  }
`;

class MyApp extends App<AppContext> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
