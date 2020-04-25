import styled, { css } from 'styled-components/native';
import { Text } from 'native-base';

import Tag from '../../Tag';

import { colors, typographies, metrics } from 'core/assets/styles';

export const Title = styled(Text)`
  font-family: ${typographies.exoRegular};
  text-transform: uppercase;
  color: ${colors.gray};
  margin: 5px 0;
  font-size: 15px;

  ${({ fullWidth }) =>
    fullWidth
      ? css`
          max-width: 190px;
        `
      : css`
          width: ${metrics.screenWidth - 70}px;
        `}
`;

export const LastUnits = styled(Tag)`
  border-radius: 30px;
`;
