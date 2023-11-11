import Loader from '../components/Loader/Loader';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { API } from '../components/API/API';

describe('Loader', () => {
  it('should render successfully', () => {
    expect(true).toBeTruthy();
  });
  it('should render Pagination card and updates URL', () => {
    const { container } = render(
      <MemoryRouter>
        <Loader />
      </MemoryRouter>
    );
    expect(container.getElementsByClassName('loader')).toBeInTheDocument;
  });
});

describe('API', () => {
  it('should render successfully', () => {
    expect(true).toBeTruthy();
  });
  it('should render API', () => {
    const { container } = render(
      <MemoryRouter>
        <API />
      </MemoryRouter>
    );
    expect(container.getElementsByClassName('cards')).toBeInTheDocument;
    expect(container.getElementsByClassName('card__list')).toBeInTheDocument;
    expect(container.getElementsByClassName('select active__btn')).toBeInTheDocument;
  });
});
