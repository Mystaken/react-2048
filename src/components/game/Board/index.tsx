import { FunctionComponent } from 'react';
import { Row, Col } from 'antd';
import { Tile } from '@2048/components/game/tiles/Tile';

const Board: FunctionComponent = () => {
  return (
    <Col xs={24} sm={24} md={20} lg={16} xl={12} xxl={8}>
      {[0, 1, 2, 3].map(i => (
        <Row gutter={0} type="flex" justify="space-around" key={i}>
          {[0, 1, 2, 3].map(i => (
            <Tile key={i}>{i}</Tile>
          ))}
        </Row>
      ))}
    </Col>
  );
};

export default Board;
