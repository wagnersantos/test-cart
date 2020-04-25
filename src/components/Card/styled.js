import styled, { css } from 'styled-components/native';
import { Card, Text, Body, Icon } from 'native-base';

import { colors, typographies } from 'core/assets/styles';

export const StyledCard = styled(Card)`
  padding: 0 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin}px 0;
    `};
`;

export const ButtonIcon = styled(Icon)`
  font-size: ${({ fontSize }) => fontSize ?? 20}px;
`;
