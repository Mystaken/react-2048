import styled from 'styled-components';

function WithoutTextSelection<T>(Component: React.ComponentType<T>) {
  return styled(Component)`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `;
}

export default WithoutTextSelection;
