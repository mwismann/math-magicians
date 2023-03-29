import { render, fireEvent, screen, } from "@testing-library/react";
import CalculatorPage from "../components/Calculator";

test('Calculator renders correctly', () => {
  const text = render(<CalculatorPage />);
  expect(text.toJSON).toMatchSnapshot();
});

test('Test calculator UI', async () => {
  render(<CalculatorPage />);
  fireEvent.click(screen.getByText('5'));
  let testDisplay = screen.getByTestId('display').textContent;
  expect(testDisplay).toMatch('5');
  fireEvent.click(screen.getByText('6'));
  testDisplay = screen.getByTestId('display').textContent;
  expect(testDisplay).toMatch('56');
  fireEvent.click(screen.getByText('+'));
  testDisplay = screen.getByTestId('display').textContent;
  expect(testDisplay).toMatch('56+');
  fireEvent.click(screen.getByText('2'));
  testDisplay = screen.getByTestId('display').textContent;
  expect(testDisplay).toMatch('56+2');
  fireEvent.click(screen.getByText('='));
  testDisplay = screen.getByTestId('display').textContent;
  expect(testDisplay).toMatch('58');
  fireEvent.click(screen.getByText('AC'));
  testDisplay = screen.getByTestId('display').textContent;
  expect(testDisplay).toMatch('');
});
