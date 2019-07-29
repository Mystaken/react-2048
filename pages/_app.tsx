import App, { Container, AppContext } from 'next/app';
import React from 'react';
import { theme } from '@2048/theme';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,
  #__next {
    margin: 0px;
    height: 100vh;
  }
`;

class MyApp extends App<AppContext> {
  public static async getInitialProps(context: AppContext) {
    const { Component, ctx } = context;

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
