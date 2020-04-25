import styled, { css } from 'styled-components/native';
import { Card } from 'native-base';

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
