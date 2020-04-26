import React from 'react';
import { Text, Icon } from 'native-base';

import { Search } from 'components';

import { Wrapper, StyledLeft, StyledRight, StyledCheckBox } from './styled';

const SearchLine = () => (
  <Wrapper>
    <StyledLeft>
      <Search />
    </StyledLeft>
    <StyledRight>
      <StyledCheckBox />
      <Text>A Filtrar </Text>
      <Icon type="MaterialCommunityIcons" name="chevron-down" />
    </StyledRight>
  </Wrapper>
);

export default SearchLine;
