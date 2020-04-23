import styled from 'styled-components/native';
import { CheckBox, Text } from 'native-base';

import { Search } from 'components';

import { colors, typographies } from 'core/assets/styles';

export const StyledSearch = styled(Search)``;

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

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledLeft = styled.View`
  flex: 0.65;
`;

export const StyledRight = styled.View`
  flex: 0.35;
  flex-direction: row;
  align-items: center;
`;

export const StyledCheckBox = styled(CheckBox).attrs({
  color: colors.black,
})`
  margin-right: 15px;
  width: 15px;
  height: 15px;
`;
