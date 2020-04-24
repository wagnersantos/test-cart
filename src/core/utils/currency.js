import Numeral from 'numeral';

Numeral.register('locale', 'pt', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  currency: {
    symbol: 'R$ ',
  },
});

Numeral.locale('pt');

export const currency = value => {
  if (typeof value != 'number') {
    console.warn('NumberFormat espera um número');
  }

  return new Numeral(value).format('0,0.00');
};
