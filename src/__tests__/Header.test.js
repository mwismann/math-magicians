import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

test('Should render the Header', () => {
  const text = renderer.create(<BrowserRouter><Header /></BrowserRouter>);
  expect(text).toMatchSnapshot();
});
