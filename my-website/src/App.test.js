import { render, screen } from '@testing-library/react';
import App from './App';
import './i18n';

test('renders navigation title', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /about me/i });
  expect(linkElement).toBeInTheDocument();
});
