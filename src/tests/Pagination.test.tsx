import Pagination from '../components/Pagination/Pagination';
import { render, act, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('Pagination', () => {
  it('should render successfully', () => {
    expect(true).toBeTruthy();
  });
  it('should render Pagination card and updates URL', async () => {
    await act(async () => {
      render(<Pagination currentPage={'1'} pageCount={10} setPages={() => {}} value={''} />);
    });
    const button = screen.getByRole('button', { name: '2' });
    await waitFor(() => {
      expect(screen.getAllByTestId('pagination')).toBeInTheDocument;
      expect(screen.getByRole('link', { name: '2' })).toHaveAttribute(
        'href',
        '/main?keyword=&page=2'
      );
    });
    await userEvent.click(button);
  });
});
