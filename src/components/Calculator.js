import '../styles/Calculator.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const keys = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

const CalculatorOutput = ({ result }) => (
  <section className="CalcOutput">
    <span data-testid="display">
      {result.total}
      {result.operation}
      {result.next}
    </span>
  </section>
);

CalculatorOutput.propTypes = {
  result: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};

const CalculatorKeys = ({ result, setResult }) => {
  const handleClick = (btn) => {
    const output = calculate(result, btn.textContent);
    setResult({ ...output });
  };

  return (
    <section className="CalcKeysContainer">
      {keys.map((key) => (<button type="button" key={key} className="CalcKey" onClick={(e) => handleClick(e.target)}>{key}</button>))}
    </section>
  );
};

CalculatorKeys.propTypes = {
  result: PropTypes.shape({ total: PropTypes.string }).isRequired,
  setResult: PropTypes.func.isRequired,
};

const RenderCalculator = () => {
  const [result, setResult] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  return (
    <div className="CalcContainer">
      <CalculatorOutput result={result} />
      <CalculatorKeys result={result} setResult={setResult} />
    </div>
  );
};

const CalculatorPage = () => (
  <div className="calculator-wrapper">
    <h2>
      Let&apos;s do some math!
    </h2>
    <RenderCalculator />
  </div>
);

export default CalculatorPage;
