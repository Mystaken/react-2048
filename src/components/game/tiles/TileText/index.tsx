import { FunctionComponent } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import { TypographyProps } from 'antd/lib/typography/Typography';

const { Title } = Typography;

export type TileTextColors = 'white' | 'red' | 'black' | 'blue';
export interface TileTextProps {
  color: TileTextColors;
}
const TileText: FunctionComponent<TileTextProps & TypographyProps> = ({
  color,
  ...props
}) => {
  let htmlColor = '';
  switch (color) {
    case 'white':
      htmlColor = 'white';
      break;
    case 'red':
      htmlColor = 'red';
      break;
    case 'black':
      htmlColor = 'black';
      break;
    case 'blue':
      htmlColor = 'blue';
      break;
  }
  const StyledTitle = styled(Title)`
    color: ${htmlColor} !important;
  `;
  return <StyledTitle level={1} {...props}></StyledTitle>;
};

export default TileText;
