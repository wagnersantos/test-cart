import { Alert } from 'react-native';

export const alertConfirm = ({ cancel = {}, confirm }) => {
  return Alert.alert(
    '',
    'Deseja remover do carrinho ?',
    [
      {
        text: 'Cancelar',
        onPress: () => cancel,
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => confirm(),
      },
    ],
    { cancelable: false },
  );
};
