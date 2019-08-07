import styled from 'styled-components';
import { FunctionComponent } from 'react';
import WithoutTextSelection from '@2048/components/core/hoc/WithoutTextSelection';

export const Tile: FunctionComponent = ({ children }) => {
  const StyledDiv = WithoutTextSelection(styled.div`
    border: 2px black solid;
    height: 100%;
    width: 100%;
    background: lightblue;
  `);
  return <StyledDiv>{children}</StyledDiv>;
};
