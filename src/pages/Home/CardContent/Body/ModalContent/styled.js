import styled from 'styled-components/native';
import { Text } from 'native-base';

import { typographies, metrics } from 'core/assets/styles';

const maxSize = metrics.screenWidth - 70;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  margin-top: 35px;
  width: ${maxSize}px;
  height: ${maxSize}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-self: flex-start;
  padding: 0 20px;
  max-width: ${maxSize}px;
`;

export const Label = styled(Text)`
  font-family: ${typographies.exoBold};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const StyledText = styled(Text)`
  font-family: ${typographies.exoRegular};
  font-size: 13px;
  font-weight: normal;
  text-transform: uppercase;
`;
