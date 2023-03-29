import Home from "../components/Home";
import renderer from 'react-test-renderer';


test('Should render the Home page', () => {
  const text = renderer.create(<Home />);
  expect(text).toMatchSnapshot();

});
