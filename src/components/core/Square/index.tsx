import styled from 'styled-components';

const Squared = styled.div`
  &::before {
    content: '';
    padding-top: 100%;
    float: left;
  }
`;

export default Squared;
