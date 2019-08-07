import { FunctionComponent, useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import Anime, { AnimeProps } from '@2048/components/core/Anime';
import Squared from '@2048/components/core/Square';
import { Tile } from '../tiles/Tile';

export type BoardShift = 'up' | 'down' | 'left' | 'right';
interface BoardProps {
  shift?: BoardShift | null;
  onShiftEnd?: (shift: BoardShift) => any;
}
const Board: FunctionComponent<BoardProps> = ({ shift, onShiftEnd }) => {
  const [groupShift, setGroupShift] = useState<{
    shift: BoardShift | null;
    completed: boolean;
  }>({ shift: null, completed: false });
  function handleShiftComplete(a: anime.AnimeInstance) {
    if (a.completed && !groupShift.completed) {
      onShiftEnd && shift && onShiftEnd(shift);
      setGroupShift(gs => ({ ...gs, completed: true }));
      groupShift.completed = true;
    }
  }

  useEffect(() => {
    if (shift && groupShift.completed) {
      setGroupShift({ shift, completed: false });
    }
  });

  function generateAnimeProps(
    shift: BoardShift | null | undefined,
    x: number,
    y: number
  ): AnimeProps {
    if (
      !shift ||
      (y === 0 && shift === 'up') ||
      (y === 3 && shift === 'down') ||
      (x === 0 && shift === 'left') ||
      (x === 3 && shift === 'right')
    ) {
      return { restart: true } as AnimeProps;
    }
    let translate: AnimeProps = {};
    switch (shift) {
      case 'up':
        translate = { translateY: '-100%' };
        break;
      case 'down':
        translate = { translateY: '100%' };
        break;
      case 'right':
        translate = { translateX: '100%' };
        break;
      case 'left':
        translate = { translateX: '-100%' };
        break;
    }
    return {
      ...translate,
      easing: 'easeInOutCirc',
      duration: 300
    };
  }

  return (
    <Col xs={24} sm={24} md={20} lg={16} xl={12} xxl={8}>
      {[0, 1, 2, 3].map((_, y) => (
        <Row gutter={0} type="flex" justify="space-around" key={y}>
          {[0, 1, 2, 3].map((content, x) => {
            const animeProps = generateAnimeProps(shift, x, y);
            return (
              <Squared key={x} style={{ border: '1px solid black' }}>
                <Anime complete={handleShiftComplete} {...animeProps}>
                  <Tile>{content}</Tile>
                </Anime>
              </Squared>
            );
          })}
        </Row>
      ))}
    </Col>
  );
};

export default Board;
