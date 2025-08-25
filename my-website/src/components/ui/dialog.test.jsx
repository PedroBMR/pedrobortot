import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from './dialog';

test('DialogTrigger preserves child onClick', async () => {
  const handleClick = jest.fn();
  render(
    <Dialog>
      <DialogTrigger>
        <button onClick={handleClick}>Open</button>
      </DialogTrigger>
      <DialogContent>
        <p>Content</p>
      </DialogContent>
    </Dialog>
  );
  const openButton = screen.getByRole('button', { name: /open/i });
  await userEvent.click(openButton);
  expect(handleClick).toHaveBeenCalled();
  expect(await screen.findByText('Content')).toBeInTheDocument();
});

test('DialogClose preserves child onClick', async () => {
  const closeClick = jest.fn();
  render(
    <Dialog>
      <DialogTrigger>
        <button>Open</button>
      </DialogTrigger>
      <DialogContent>
        <DialogClose>
          <button onClick={closeClick}>Close</button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
  await userEvent.click(screen.getByRole('button', { name: /open/i }));
  const closeButton = await screen.findByRole('button', { name: /close/i });
  await userEvent.click(closeButton);
  expect(closeClick).toHaveBeenCalled();
  expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
});
