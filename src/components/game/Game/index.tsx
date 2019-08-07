import { FunctionComponent, useState } from 'react';
import Center from '@2048/layout/Center';
import Board, { BoardShift } from '@2048/components/game/Board';
import styled from 'styled-components';

const Wrapper = styled.div`
   {
    padding-bottom: 10vh;
    height: 100%;
  }
`;

const Game: FunctionComponent = () => {
  const [shift, setShift] = useState<null | BoardShift>(null);

  function handleKeyPress(e: React.KeyboardEvent) {
    if (!shift) {
      switch (e.key) {
        case 'ArrowUp':
          setShift('up');
          break;
        case 'ArrowDown':
          setShift('down');
          break;
        case 'ArrowLeft':
          setShift('left');
          break;
        case 'ArrowRight':
          setShift('right');
          break;
      }
    }
  }
  return (
    <Wrapper
      onKeyDown={e => {
        handleKeyPress(e);
      }}
      tabIndex={0}>
      <Center>
        <Board
          shift={shift}
          onShiftEnd={() => {
            setShift(null);
          }}
        />
      </Center>
    </Wrapper>
  );
};

export default Game;
