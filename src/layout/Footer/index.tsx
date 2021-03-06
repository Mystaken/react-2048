import { Layout, Button } from 'antd';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const FixedFooter = styled(Layout.Footer)`
  position: fixed;
  z-index: 1;
  width: 100%;
  bottom: 0;
  text-align: center;
`;

const Footer: FunctionComponent = () => {
  return (
    <FixedFooter>
      <Button
        shape="circle"
        icon="github"
        size="large"
        href="https://github.com/Mystaken/react-2048"
        target="_blank"
      />
    </FixedFooter>
  );
};

export default Footer;
