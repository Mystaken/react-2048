import { FunctionComponent } from 'react';
import { Layout } from 'antd';
import Header from '@2048/layout/Header';
import Content from '@2048/layout/Content';
import Footer from '@2048/layout/Footer';

const GamePage: FunctionComponent = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
};

export default GamePage;
