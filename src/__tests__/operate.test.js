import operate from '../logic/operate';

describe('operate', () => {
  test('should return 10 after adding 7+3', () => {
    expect(operate('7', '3', '+')).toBe('10');
  });
  test('shoud return 4 after subtracting 7 - 3', () => {
    expect(operate('7', '3', '-')).toEqual('4');
  });
  test('shoud return 21 after multilpying 7 x 3', () => {
    expect(operate('7', '3', 'x')).toEqual('21');
  });
  test('shoud return -21 after multilpying 7 x -3', () => {
    expect(operate('7', '-3', 'x')).toEqual('-21');
  });
  test('shoud return 4 after dividin 12 ÷ 3', () => {
    expect(operate('12', '3', '÷')).toEqual('4');
  });
  test('shoud return 3 after modulo 15 % 4', () => {
    expect(operate('15', '4', '%')).toEqual('3');
  });
  test('shoud return 3.5 after adding 14 ÷ 4', () => {
    expect(operate('14', '4', '÷')).toEqual('3.5');
  });
  test('shoud return error 12 ÷ 0', () => {
    expect(operate('12', '0', '÷')).toEqual("Can't divide by 0.");
  });
  test('shoud return error 12 % 0', () => {
    expect(operate('12', '0', '%')).toEqual("Can't find modulo as can't divide by 0.");
  });
});
