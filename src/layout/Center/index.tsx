import { Row, Col } from 'antd';
import styled from 'styled-components';
import { FunctionComponent } from 'react';

const FullHeightRow = styled(Row)`
  height: 100%;
`;

const Center: FunctionComponent = ({ children }) => {
  return (
    <FullHeightRow type="flex" justify="center" align="middle">
      <Col>{children}</Col>
    </FullHeightRow>
  );
};

export default Center;
