import { Button, InputNumber, Form } from 'antd';
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { $game } from '@2048/redux/selectors/game.selector';
import gameAction from '@2048/redux/actions/game.action';
import { generateEmptyBoard, addRandomCell } from '@2048/services/game.service';

const FixedHeader = styled(Form)`
  position: fixed;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Header: FunctionComponent = () => {
  const game = useSelector($game);
  const dispatch = useDispatch();
  const [width, setWidth] = useState(game.width);
  const [height, setHeight] = useState(game.height);

  function onHeightChange(newHeight: number | undefined) {
    if (newHeight) {
      setHeight(newHeight);
    }
  }
  function onWidthChange(newWidth: number | undefined) {
    if (newWidth) {
      setWidth(newWidth);
    }
  }

  function restart() {
    const newBoard = generateEmptyBoard(width, height);
    addRandomCell(newBoard, 2);
    dispatch(
      gameAction.initialize({
        board: newBoard,
        width,
        height
      })
    );
  }
  return (
    <FixedHeader layout="inline">
      <Form.Item label="Height">
        <InputNumber
          min={1}
          max={10}
          value={height}
          onChange={onHeightChange}
        />
      </Form.Item>
      <Form.Item label="Width">
        <InputNumber min={1} max={10} value={width} onChange={onWidthChange} />
      </Form.Item>
      <Form.Item>
        <Button onClick={restart} type="primary" htmlType="submit">
          Restart
        </Button>
      </Form.Item>
    </FixedHeader>
  );
};

export default Header;
