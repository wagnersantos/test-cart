import styled from 'styled-components/native';
import { Text, List } from 'native-base';

import { colors, typographies } from 'core/assets/styles';

export const StyledContent = styled.View`
  margin: 40px 0;
  padding: 0 16px;
`;

export const Results = styled(Text)`
  font-family: ${typographies.exoRegular};
  font-size: 16px;
  color: ${colors.gray};
  text-align: center;
  margin: 20px 0;
  padding-top: 20px;
`;

export const StyledList = styled(List).attrs({
  contentContainerStyle: { paddingBottom: 320 },
})``;
