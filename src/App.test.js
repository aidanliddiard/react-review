import { render, screen } from '@testing-library/react';
import App from './App';

test('renders problem 1', () => {
  render(<App />);
  const headerElement = screen.getByTestId('problem-1-link');
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent('Problem 1');
});
