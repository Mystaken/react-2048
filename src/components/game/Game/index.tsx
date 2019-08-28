import { FunctionComponent, useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Center from '@2048/layout/Center';
import Board from '@2048/components/game/Board';
import styled from 'styled-components';
import { BoardShift } from '@2048/types/game';
import { useDispatch, useSelector } from 'react-redux';
import gameAction from '@2048/redux/actions/game.action';
import { $board, $won, $lost } from '@2048/redux/selectors/game.selector';
import { Modal } from 'antd';

const Wrapper = styled.div`
   {
    padding-bottom: 10vh;
    height: 100%;
  }
`;

const Game: FunctionComponent = () => {
  const [shift, setShift] = useState<null | BoardShift>(null);
  const board = useSelector($board);
  const lost = useSelector($lost);
  const won = useSelector($won);
  const dispatch = useDispatch();

  function onKeyDown(e: React.KeyboardEvent) {
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

  function onShiftEnd(shift: BoardShift) {
    setShift(null);
    const shiftAction = gameAction.shiftBoard(board, shift);
    dispatch(shiftAction);
    dispatch(gameAction.generateRandomCell(shiftAction.body!.board, 2));
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => setShift('left'),
    onSwipedRight: () => setShift('right'),
    onSwipedUp: () => setShift('up'),
    onSwipedDown: () => setShift('down'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    if (won) {
      Modal.success({
        title: 'You won!'
      });
    }
  }, [won]);

  useEffect(() => {
    if (lost) {
      Modal.error({
        title: 'You lost!'
      });
    }
  }, [lost]);

  return (
    <Wrapper onKeyDown={onKeyDown} tabIndex={0} {...handlers}>
      <Center>
        <Board shift={shift} onShiftEnd={onShiftEnd} />
      </Center>
    </Wrapper>
  );
};

export default Game;
