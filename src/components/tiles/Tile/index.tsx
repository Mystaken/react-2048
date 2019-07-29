import styled from 'styled-components';
import { FunctionComponent } from 'react';

const StyledDiv = styled.div`
  background: lightblue;
  border: black 2px solid;
  flex: 1 0 auto;
  &::before {
    content: '';
    padding-top: 100%;
    float: left;
  }
`;
const Tile: FunctionComponent = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};
export default Tile;
