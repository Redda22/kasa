import { render, screen } from '@testing-library/react';
import PP from './PP';

test('renders learn react link', () => {
  render(<PP />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
