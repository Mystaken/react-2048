import { FunctionComponent, useEffect } from 'react';
import { Layout } from 'antd';
import Header from '@2048/layout/Header';
import Content from '@2048/layout/Content';
import Footer from '@2048/layout/Footer';
import Game from '@2048/components/game/Game';
import { useDispatch, useSelector } from 'react-redux';
import gameAction from '@2048/redux/actions/game.action';
import { $game } from '@2048/redux/selectors/game.selector';
import { generateEmptyBoard } from '@2048/services/game.service';
import Head from 'next/head';

const GamePage: FunctionComponent = () => {
  const dispatch = useDispatch();
  const game = useSelector($game);
  useEffect(() => {
    const newBoard = generateEmptyBoard(game.width, game.height);
    dispatch(gameAction.generateRandomCell(newBoard, 2));
  }, []);
  return (
    <>
      <Head>
        <title>React 2048</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout className="layout">
        <Header />
        <Content>
          <Game />
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default GamePage;
