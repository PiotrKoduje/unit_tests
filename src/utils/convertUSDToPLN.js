import validValue from "./validValue";

export const convertUSDToPLN = (USD) => {
  const validation = validValue(USD, 'PLN');

  if(validation ===1){
    const USDtoPLN = USD * 3.5;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
    currency: 'PLN'
    });

  return formatter.format(USDtoPLN).replace(/\u00a0/g, ' ');
  } else {
    return validation;
  }
}