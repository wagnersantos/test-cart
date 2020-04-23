import styled, { css } from 'styled-components/native';
import { Card, CardItem, Text, Body, Icon } from 'native-base';

import { colors, typographies } from 'core/assets/styles';

export const StyledCard = styled(Card)`
  padding: 0 10px;
  border-radius: 6px;
`;

export const Title = styled(Text)`
  font-family: ${typographies.exoRegular};
  text-transform: uppercase;
  color: ${colors.gray};
  margin: 5px 0;
`;

export const StyledBody = styled(Body)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Left = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Right = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-right: 5px;
`;

export const StyledImage = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 125px;
  height: 125px;
`;

export const Price = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled(Text)`
  font-family: ${typographies.exoSemiBold};
  font-size: 12px;
  text-transform: uppercase;
  padding-right: 10px;
  color: ${colors.grayLight};
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

export const StyledText = styled(Text)`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-family: ${typographies.exoBold};
  color: ${colors.grayMidnight};
`;
