import styled from 'styled-components';
import { FunctionComponent } from 'react';

export const BasicTile = styled.div`
  flex: 1 0 auto;
  &::before {
    content: '';
    padding-top: 100%;
    float: left;
  }
`;

export const Tile: FunctionComponent = ({ children }) => {
  const StyledDiv = styled(BasicTile)`
    margin: 5px;
    background: lightblue;
  `;
  return <StyledDiv>{children}</StyledDiv>;
};
