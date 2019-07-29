import { Layout, Row, Col, Menu } from 'antd';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const FixedHeader = styled(Layout.Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
`;

const Header: FunctionComponent = () => {
  return (
    <FixedHeader>
      <Row>
        <Col span={24}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </FixedHeader>
  );
};

export default Header;
