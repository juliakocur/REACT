import Search from '../components/Search/Search';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

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
  });
});
