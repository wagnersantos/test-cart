import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { Tag } from 'components';

import { RemoveButton, ButtonIcon } from './styled';

const Footer = ({ products, value }) => {
  const [removeCart, isVisibleRemove] = value;

  return (
    <>
      <Tag color="black">{`sku ${products.sku}`}</Tag>
      <Tag color="green">{products.category}</Tag>
      <TouchableOpacity>
        <ButtonIcon type="MaterialCommunityIcons" name="information-outline" />
      </TouchableOpacity>
      <TouchableOpacity>
        <ButtonIcon
          type="MaterialCommunityIcons"
          name="clipboard-text-outline"
        />
      </TouchableOpacity>
      {isVisibleRemove && (
        <RemoveButton onPress={removeCart}>
          <ButtonIcon type="MaterialCommunityIcons" name="trash-can-outline" />
        </RemoveButton>
      )}
    </>
  );
};

Footer.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
  value: PropTypes.instanceOf(Array).isRequired,
};

export default Footer;
