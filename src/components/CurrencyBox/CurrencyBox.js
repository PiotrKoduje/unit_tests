import { useState } from 'react';
import CurrencyForm from './../CurrencyForm/CurrencyForm';
import ResultBox from './../ResultBox/ResultBox';

const CurrencyBox = () => {
  const [data, setData] = useState({
    amount: 0,
    from: 'PLN',
    to: 'USD'
  });

  const handleDataChange = data => {
    setData(data);
  }

  return (
    <main>
      <CurrencyForm action={handleDataChange} />
      {/* { data.amount ? <ResultBox {...data} /> : null }  */}
      <ResultBox {...data} />
    </main>
  );
};

export default CurrencyBox;