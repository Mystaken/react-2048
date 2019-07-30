import { FunctionComponent, useState } from 'react';
import Center from '@2048/layout/Center';
import Board from '@2048/components/game/Board';
import styled from 'styled-components';
import Anime from '@2048/components/core/Anime';
import { Button } from 'antd';

const Wrapper = styled.div`
   {
    padding-bottom: 10vh;
    height: 100%;
  }
`;

const Game: FunctionComponent = () => {
  const [s, setS] = useState<boolean>(false);
  function test() {
    setS(s => !s);
  }
  return (
    <Wrapper>
      <Center>
        <Board />
        <Button onClick={test} />
        <Anime
          easing="easeOutElastic"
          loop={true}
          autoplay={true}
          duration={1000}
          delay={(_: HTMLElement, index: number) => index * 240}
          translateX={s ? '13rem' : '20rem'}
          scale={[0.75, 0.9]}>
          <div>test</div>
          <div>test</div>
          {s ? (
            <div>
              <div>test2</div>
              <div>test2</div>
            </div>
          ) : (
            ''
          )}
        </Anime>
      </Center>
    </Wrapper>
  );
};

export default Game;
