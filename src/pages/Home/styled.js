import styled from 'styled-components/native';
import { Content, CheckBox } from 'native-base';

import { Search } from 'components';

export const StyledSearch = styled(Search)``;

export const StyledContent = styled(Content)`
  margin-top: 20px;
  padding: 0 16px;
`;

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const StyledLeft = styled.View`
  flex: 0.65;
`;

export const StyledRight = styled.View`
  flex: 0.35;
  flex-direction: row;
  align-items: center;
`;

export const StyledCheckBox = styled(CheckBox)`
  margin-right: 15px;
  width: 15px;
  height: 15px;
`;
