import calculate from '../logic/calculate';

describe('Test of all calculate functions', () => {
  test('will return 4 by adding 2 + 2', () => {
    const myOb = { total: '2', next: '2', operation: '+' };
    const resObj = { total: '4', next: null, operation: null };
    expect(calculate(myOb, '=')).toEqual(resObj);
  });
  test('will return the value of 5 by substract 8 - 3', () => {
    const myObj = { total: '8', next: '3', operation: '-' };
    const ResObj = { total: '5', next: null, operation: null };
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
  test('will return the value of 0 by pressing AC', () => {
    const myObj = { total: '2', next: '2', operation: '÷' };
    const ResObj = { total: '0', next: null, operation: null };
    expect(calculate(myObj, 'AC')).toEqual(ResObj);
  });
  test('will return error when dividing by 0 ', () => {
    const myObj = { total: '2', next: '0', operation: '÷' };
    const ResObj = { total: "Can't divide by 0.", next: null, operation: null };
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
  test('will return the value of 6 by multiply 3 x 2', () => {
    const myObj = { total: '3', next: '2', operation: 'x' };
    const ResObj = { total: '6', next: null, operation: null };
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
  test('will return the value of -6 by multiply 3 x -2', () => {
    const myObj = { total: '3', next: '-2', operation: 'x' };
    const ResObj = { total: '-6', next: null, operation: null };
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
  test('will return the value of 1.25 by dividing 2.5 / 2', () => {
    const myObj = { total: '2.5', next: '2', operation: '÷' };
    const ResObj = { total: '1.25', next: null, operation: null };
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
  test('will return -5 when changin sign of 5 with +/-', () => {
    const myObj = { total: '0', next: '5', operation: null };
    const ResObj = { total: '0', next: '-5', operation: null };
    expect(calculate(myObj, '+/-')).toEqual(ResObj);
  });
  test('will return the value gettin modulo 15 % 4', () => {
    const myObj = { total: '15', next: '4', operation: '%' };
    const ResObj = { total: '3', next: null, operation: null };
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
  test('will return error when gettin modulo 15 % 0', () => {
    const myObj = { total: '15', next: '0', operation: '%' };
    const ResObj = { total: "Can't find modulo as can't divide by 0.", next: null, operation: null };
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
});
