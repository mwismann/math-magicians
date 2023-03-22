import './Calculator.css';

const keys = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

const CalculatorOutput = () => (
  <section className="CalcOutput">
    <span>0</span>
  </section>
);

const CalculatorKeys = () => (
  <section className="CalcKeysContainer">
    {keys.map((key) => (<div key={key} className="CalcKey">{key}</div>))}
  </section>
);

const CalculatorContainer = () => (
  <div className="CalcContainer">
    <CalculatorOutput />
    <CalculatorKeys />
  </div>
);

export default CalculatorContainer;
