const validValue = (amount, currency) =>{

  currency = currency === 'USD' ? currency = '$' : currency;

  if (typeof amount === 'string') return NaN;
  if (amount === undefined) return NaN;
  if (Number.isNaN(amount)) return NaN;
  if (typeof amount !== 'number' && typeof amount !== 'string') return 'Error';
  if (amount <= 0) return currency + '0.00';
  return 1;
};

export default validValue;