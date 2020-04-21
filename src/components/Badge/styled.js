import styled, { css } from 'styled-components/native';
import { Badge, Text } from 'native-base';

import { colors } from 'core/assets/styles';

export const StyledBadge = styled(Badge)`
  background-color: ${({ color }) => colors[color]};
  transform: ${({ size }) => css`scale(${size}, ${size})`};
`;

export const StyledText = styled(Text)`
  color: ${({ colorText }) => colors[colorText]};
`;
