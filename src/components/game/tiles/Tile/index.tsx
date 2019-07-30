import styled from 'styled-components';
import { FunctionComponent } from 'react';

const Tile: FunctionComponent = ({ children }) => {
  const StyledDiv = styled.div`
    margin: 5px;
    background: lightblue;
    border: black 2px solid;
    flex: 1 0 auto;
    &::before {
      content: '';
      padding-top: 100%;
      float: left;
    }
  `;
  return <StyledDiv>{children}</StyledDiv>;
};
export default Tile;
