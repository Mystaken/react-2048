import styled from 'styled-components';
import { FunctionComponent } from 'react';
import WithoutTextSelection from '@2048/components/core/hoc/WithoutTextSelection';
import Center from '@2048/layout/Center';

export const Tile: FunctionComponent = ({ children }) => {
  const StyledDiv = WithoutTextSelection(styled.div`
    height: 100%;
    width: 100%;
    background: lightblue;
    text-align: center;
  `);
  return (
    <StyledDiv>
      <Center>{children}</Center>
    </StyledDiv>
  );
};
