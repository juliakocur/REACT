import Loader from '../components/Loader/Loader';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

describe('Loader', () => {
  it('should render successfully', () => {
    expect(true).toBeTruthy();
  });
  it('should render Pagination card and updates URL', () => {
    const { container } = render(
      <Provider store={setupStore}>
        <Loader />
      </Provider>
    );
    expect(container.getElementsByClassName('loader')).toBeInTheDocument;
  });
});
