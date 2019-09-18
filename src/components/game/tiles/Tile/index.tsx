import styled from 'styled-components';
import { FunctionComponent } from 'react';
import WithoutTextSelection from '@2048/components/core/hoc/WithoutTextSelection';
import Center from '@2048/layout/Center';
import { Typography } from 'antd';
import { TileProps, ColorTileProps } from './model';
import TileText, { TileTextColors } from '../TileText';
const { Title } = Typography;

const DefaultTile = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
`;

export const DarkTile: FunctionComponent<ColorTileProps> = ({ cellNum }) => {
  let backgroundColor = 'white';
  if (cellNum >= 2048) {
    backgroundColor = 'black';
  } else if (cellNum >= 1024) {
    backgroundColor = '1a1a1a';
  } else if (cellNum >= 512) {
    backgroundColor = '333333';
  } else if (cellNum >= 256) {
    backgroundColor = '#4d4d4d';
  } else if (cellNum >= 128) {
    backgroundColor = '#808080';
  } else if (cellNum >= 64) {
    backgroundColor = '#8c8c8c';
  } else if (cellNum >= 32) {
    backgroundColor = '#a6a6a6';
  } else if (cellNum >= 16) {
    backgroundColor = '#b3b3b3';
  } else if (cellNum >= 8) {
    backgroundColor = '#cccccc';
  } else if (cellNum >= 4) {
    backgroundColor = '#d9d9d9';
  } else if (cellNum >= 2) {
    backgroundColor = '#f2f2f2';
  }
  let textColor: TileTextColors = 'black';
  if (cellNum >= 128) {
    textColor = 'white';
  }
  const DarkTile = styled(DefaultTile)`
    background: ${backgroundColor};
  `;
  const StyledTile = WithoutTextSelection(DarkTile);
  return (
    <StyledTile>
      <Center>
        <TileText color={textColor}>{cellNum}</TileText>
      </Center>
    </StyledTile>
  );
};

export const Tile: FunctionComponent<TileProps> = ({ color, ...props }) => {
  switch (color) {
    case 'dark':
      return <DarkTile {...props} />;
    default:
  }
  const StyledTile = WithoutTextSelection(DefaultTile);
  return (
    <StyledTile>
      <Center>
        <Title level={1}>{props.cellNum}</Title>
      </Center>
    </StyledTile>
  );
};
