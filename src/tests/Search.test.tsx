import Search from '../components/Search/Search';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';

describe('Search', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it('should renders without crashing', () => {
    expect(Search).toBeTruthy();
  });
  it('should get input value from LC', () => {
    localStorage.setItem('Value', 'Test LC');
    render(<Search />);
    expect(screen.getByRole('textbox')).toHaveValue('Test LC');
  });

  describe('Search', () => {
    const setup = () => {
      render(<Search />);
    };
    test('should save input value after submit', async () => {
      setup();
      const input = screen.getByTestId('search-field');
      expect(input).toBeTruthy();
      expect(input.textContent).toBe('');
      input.textContent = 'Test';
      userEvent.click(screen.getByTestId('click'));
      userEvent.setup();
      expect(input.textContent).toBe('Test');
    });
  });
});
