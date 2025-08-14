import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Playground from './Playground';

test('renders button and opens dialog with input', async () => {
  render(<Playground />);
  const button = screen.getByRole('button', { name: /open dialog/i });
  expect(button).toBeInTheDocument();
  await userEvent.click(button);
  expect(await screen.findByPlaceholderText(/type here/i)).toBeInTheDocument();
});
