import { Layout, Row, Col, Menu, Button, InputNumber } from 'antd';
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { $game } from '@2048/redux/selectors/game.selector';
import gameAction from '@2048/redux/actions/game.action';
import { generateEmptyBoard, addRandomCell } from '@2048/services/game.service';

const FixedHeader = styled(Layout.Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
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
    <FixedHeader>
      <Row>
        <Col span={24}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">
              <InputNumber
                min={1}
                max={10}
                value={height}
                formatter={value => `Height: ${value}`}
                onChange={onHeightChange}
              />
            </Menu.Item>
            <Menu.Item key="2">
              <InputNumber
                min={1}
                max={10}
                value={width}
                formatter={value => `Width: ${value}`}
                onChange={onWidthChange}
              />
            </Menu.Item>
            <Menu.Item key="3">
              <Button onClick={restart}>Restart</Button>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </FixedHeader>
  );
};

export default Header;
