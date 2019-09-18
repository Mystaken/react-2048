import App, { AppContext } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@2048/redux/store';

import { createGlobalStyle } from 'styled-components';

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
      <>
        <GlobalStyle />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default MyApp;
