import { BoardShift } from '@2048/types/game';
import { ACTIONS } from '@2048/redux/reducers/game.reducer';
import { IAction } from '@2048/types/redux';

const shiftMap: { [key in BoardShift]: keyof typeof ACTIONS } = {
  up: 'SHIFT_UP',
  down: 'SHIFT_DOWN',
  left: 'SHIFT_LEFT',
  right: 'SHIFT_RIGHT'
};

function shiftBoard(shift: BoardShift): IAction<keyof typeof ACTIONS> {
  return {
    type: shiftMap[shift]
  };
}

export default { shiftBoard };
