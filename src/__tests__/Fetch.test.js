import * as React from 'react';
import { render, screen } from '@testing-library/react';
import FetchQuote from '../components/Fetch';

it('renders the Quote component', () => {
  render(<FetchQuote />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
