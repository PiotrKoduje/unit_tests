import validValue from "./validValue";

export const convertPLNToUSD = (PLN) => {
  const validation = validValue(PLN, '$');

  if(validation === 1){
    const PLNtoUSD = PLN / 3.5;
  
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
  } else {
    return validation;
  }
}