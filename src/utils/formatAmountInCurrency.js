import validValue from "./validValue";

export const formatAmountInCurrency = (amount, currency) => {
  const validation = validValue(amount, currency);

  if(validation === 1) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    });
  
    return formatter.format(amount).replace(/\u00a0/g, ' ');
  } else {
    return validation;
  } 
};