import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

  describe('Component ResultBox', () => {
  it('should render without crashing', () => {
      render(<ResultBox from='PLN' to='USD' amount={100}/>);
  });

  const plnToUsdCases = [
    { amount: 100, from: 'PLN', to: 'USD', expectedValue: 'PLN 100.00 = $28.57' },
    { amount: 222, from: 'PLN', to: 'USD', expectedValue: 'PLN 222.00 = $63.43' },
    { amount: 456, from: 'PLN', to: 'USD', expectedValue: 'PLN 456.00 = $130.29' },
    { amount: 124344, from: 'PLN', to: 'USD', expectedValue: 'PLN 124,344.00 = $35,526.86' },
  ];

  for(const {amount, from, to, expectedValue} of plnToUsdCases) {
    it('should render proper info about conversion when PLN -> USD', () => {
      render (<ResultBox from={from} to={to} amount={amount} />);
      const resultBox = screen.getByTestId('resultBox');
      expect(resultBox).toHaveTextContent(expectedValue);
    });
  }  

  const usdToPlnCases = [
    { amount: 100, from: 'USD', to: 'PLN', expectedValue: '$100.00 = PLN 350.00' },
    { amount: 222, from: 'USD', to: 'PLN', expectedValue: '$222.00 = PLN 777.00' },
    { amount: 456, from: 'USD', to: 'PLN', expectedValue: '$456.00 = PLN 1,596.00' },
    { amount: 124344, from: 'USD', to: 'PLN', expectedValue: '$124,344.00 = PLN 435,204.00' },
  ];
  
  for(const {amount, from, to, expectedValue} of usdToPlnCases) {
    it('should render proper info about conversion when USD -> PLN', () => {
      render (<ResultBox from={from} to={to} amount={amount} />);
      const resultBox = screen.getByTestId('resultBox');
      expect(resultBox).toHaveTextContent(expectedValue);
    });
  } 

  const unchangedCurrency = [
    { amount: 100, from: 'PLN', to: 'PLN', expectedValue: 'PLN 100.00 = PLN 100.00' },
    { amount: 222, from: 'PLN', to: 'PLN', expectedValue: 'PLN 222.00 = PLN 222.00' },
    { amount: 456, from: 'USD', to: 'USD', expectedValue: '$456.00 = $456.00' },
    { amount: 124344, from: 'USD', to: 'USD', expectedValue: '$124,344.00 = $124,344.00' },
  ];

  for(const {amount, from, to, expectedValue} of unchangedCurrency) {
    it('should render proper info when the same currency is selected', () => {
      render (<ResultBox from={from} to={to} amount={amount} />);
      const resultBox = screen.getByTestId('resultBox');
      expect(resultBox).toHaveTextContent(expectedValue);
    });
  }

  const negativeAmount = [
    { amount: -100, from: 'PLN', to: 'USD', expectedValue: 'Wrong value...' },
    { amount: -200, from: 'PLN', to: 'USD', expectedValue: 'Wrong value...' },
    { amount: -300, from: 'USD', to: 'PLN', expectedValue: 'Wrong value...' },
    { amount: -422, from: 'USD', to: 'PLN', expectedValue: 'Wrong value...' },
    { amount: -456, from: 'USD', to: 'USD', expectedValue: 'Wrong value...' },
    { amount: -124344, from: 'PLN', to: 'PLN', expectedValue: 'Wrong value...' },
  ];

  for(const {amount, from, to, expectedValue} of negativeAmount) {
    it('should render "Wrong value..." for negative amount', () => {
      render (<ResultBox from={from} to={to} amount={amount} />);
      const resultBox = screen.getByTestId('resultBox');
      expect(resultBox).toHaveTextContent(expectedValue);
    });
  }
});