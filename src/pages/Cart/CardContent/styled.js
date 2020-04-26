import styled from 'styled-components/native';
import { Text } from 'native-base';

import { Card } from 'components';

import { colors, typographies } from 'core/assets/styles';

export const Title = styled(Text)`
  font-family: ${typographies.exoBold};
  text-transform: uppercase;
  color: ${colors.black};
  font-weight: bold;
  margin: 5px 0;
  font-size: 15px;
`;

export const StyledBody = styled(Card.Body)`
  height: 105px;
  flex-direction: column;
`;

export const StyledCard = styled(Card)`
  margin-bottom: 20px;
`;
