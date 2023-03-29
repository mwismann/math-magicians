import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('renders App', () => {
  const text = renderer.create(<BrowserRouter><App /></BrowserRouter>);
  expect(text).toMatchSnapshot();
});
