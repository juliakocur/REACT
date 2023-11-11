import { describe, it } from 'vitest';
import { App } from '../App';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('Route not found', () => {
    render(
      <MemoryRouter initialEntries={['/not-found-this-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('main')).toHaveTextContent(
      'Page not found. Maybe you write wrong URL?'
    );
  });
});

describe('App', () => {
  it('Route not found', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('search-field')).toBeInTheDocument();
  });
});
