import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('Should render the Home page', () => {
  const text = renderer.create(<Home />);
  expect(text).toMatchSnapshot();
});
