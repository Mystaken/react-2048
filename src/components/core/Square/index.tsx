import styled from 'styled-components';

const Squared = styled.div`
  flex: 1 0 auto;
  &::before {
    content: '';
    padding-top: 100%;
    float: left;
  }
`;

export default Squared;
