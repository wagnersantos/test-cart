import React from 'react';

import { currency } from 'core/utils/currency';

import {
  Error,
  InfoMain,
  InfoSecondary,
  StyledIcon,
  StyledText,
  StyledButton,
} from './styled';

const BottomContent = ({ sum, removeAllCart }) => {
  const diff = 350 - sum;

  return (
    <>
      {!!diff > 0 && (
        <>
          <Error>
            <StyledIcon
              type="MaterialCommunityIcons"
              name="alert-circle-outline"
              color="red"
              fontSize={23}
            />
            <InfoMain>pedido mínimo não alcançado</InfoMain>
          </Error>
          <InfoSecondary>{`falta R$ ${currency(diff)}`}</InfoSecondary>
        </>
      )}

      <StyledButton onPress={removeAllCart}>
        <StyledIcon
          type="MaterialCommunityIcons"
          name="trash-can-outline"
          color="black"
          fontSize={18}
        />
        <StyledText>limpar carrinho</StyledText>
      </StyledButton>
    </>
  );
};

export default BottomContent;
