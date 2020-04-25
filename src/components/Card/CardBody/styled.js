import styled, { css } from 'styled-components/native';
import { Text, Body, Icon } from 'native-base';

import { colors, typographies } from 'core/assets/styles';

export const StyledBody = styled(Body)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Left = styled.View`
  justify-content: space-between;
  align-items: center;
`;

export const Right = styled.View`
  justify-content: center;
  align-items: center;
  padding-right: 5px;
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

export const StyledImage = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 90px;
  height: 90px;
`;

export const Price = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const StyledText = styled(Text)`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-family: ${typographies.exoBold};
  font-size: 16px;
  color: ${colors.grayMidnight};
`;

export const Label = styled(Text)`
  font-family: ${typographies.exoSemiBold};
  font-size: 13px;
  text-transform: uppercase;
  padding-right: 10px;
  color: ${colors.grayLight};
`;

export const ButtonIcon = styled(Icon)`
  font-size: ${({ fontSize }) => fontSize ?? 20}px;
`;

export const RemoveButton = styled.TouchableOpacity`
  font-size: 20px;
  position: absolute;
  right: 0;
`;
