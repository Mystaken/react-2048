import { FunctionComponent, useState, useEffect } from 'react';
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

const MOUSE_DIST_THRESHOLD = 50;

const Game: FunctionComponent = () => {
  const [shift, setShift] = useState<null | BoardShift>(null);
  const board = useSelector($board);
  const lost = useSelector($lost);
  const won = useSelector($won);
  const dispatch = useDispatch();

  let mouseStart = { x: 0, y: 0 };

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

  function onMouseUp(e: React.MouseEvent) {
    const diffX = e.screenX - mouseStart.x;
    const diffY = e.screenY - mouseStart.y;
    if (shift) return;
    if (Math.abs(diffY) * 1.3 > Math.abs(diffX)) {
      if (diffY > MOUSE_DIST_THRESHOLD) {
        setShift('down');
      } else if (diffY < -MOUSE_DIST_THRESHOLD) {
        setShift('up');
      }
    } else {
      if (diffX > MOUSE_DIST_THRESHOLD) {
        setShift('right');
      } else if (diffX < 0) {
        setShift('left');
      }
    }
  }

  function onMouseDown(e: React.MouseEvent) {
    mouseStart = { x: e.screenX, y: e.screenY };
  }

  function onShiftEnd(shift: BoardShift) {
    setShift(null);
    const shiftAction = gameAction.shiftBoard(board, shift);
    dispatch(shiftAction);
    dispatch(gameAction.generateRandomCell(shiftAction.body!.board, 2));
  }
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
    <>
      <Wrapper
        onKeyDown={onKeyDown}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        tabIndex={0}>
        <Center>
          <Board shift={shift} onShiftEnd={onShiftEnd} />
        </Center>
      </Wrapper>
    </>
  );
};

export default Game;
