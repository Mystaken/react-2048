import styled from 'styled-components';
import { FunctionComponent } from 'react';

export const Tile: FunctionComponent = ({ children }) => {
  const StyledDiv = styled.div`
    border: 2px black solid;
    height: 100%;
    width: 100%;
    background: lightblue;
  `;
  return <StyledDiv>{children}</StyledDiv>;
};
