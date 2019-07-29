import { FunctionComponent } from 'react';
import Center from '@2048/layout/Center';
import Board from '@2048/components/Board';
import styled from 'styled-components';

const Wrapper = styled.div`
   {
    padding-bottom: 10vh;
    height: 100%;
  }
`;

const Game: FunctionComponent = () => {
  return (
    <Wrapper>
      <Center>
        <Board />
      </Center>
    </Wrapper>
  );
};

export default Game;
