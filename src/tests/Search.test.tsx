import Search from '../components/Search/Search';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

describe('Search', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it('should renders without crashing', () => {
    expect(Search).toBeTruthy();
  });
  it('should get input value from LC', () => {
    localStorage.setItem('Value', '');
    render(
      <Provider store={setupStore}>
        <Search />
      </Provider>
    );
    const input = screen.getByTestId('search-field');
    fireEvent.submit(input);
    const { container } = render(
      <Provider store={setupStore}>
        <Search />
      </Provider>
    );
    expect(container.getElementsByClassName('searchClick')).toBeInTheDocument;
    const button = screen.getAllByTestId('cta-button');
    fireEvent.click(button[0]);
    expect(input).toHaveValue('');
  });

  describe('Search', () => {
    const setup = () => {
      render(
        <Provider store={setupStore}>
          <Search />
        </Provider>
      );
    };
    it('should save input value after submit', async () => {
      setup();
      const input = screen.getByTestId('search-field');
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue('');
      const value = 'bum';
      fireEvent.change(input, { target: { value } });
      expect(input).toHaveValue('bum');

      input.textContent = 'Test';
      userEvent.click(screen.getByTestId('click'));
      userEvent.setup();
      expect(input.textContent).toBe('Test');

      const searchForm = screen.getByTestId('search-form');
      userEvent.click(searchForm);
      userEvent.setup();
      expect(input.textContent).toBe('Test');
    });
  });
});
