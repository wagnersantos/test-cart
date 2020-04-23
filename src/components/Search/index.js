import React from 'react';
import { Input, Item, Icon } from 'native-base';

// import { Container } from './styles';

const Search = () => {
  return (
    <Item regular style={{ height: 40 }}>
      <Icon name="search" />
      <Input />
      <Icon type="MaterialCommunityIcons" name="barcode-scan" />
      <Icon type="MaterialCommunityIcons" name="window-close" />
    </Item>
  );
};

export default Search;
