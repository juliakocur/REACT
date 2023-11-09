import { render, act } from '@testing-library/react';
import { dataTest } from './mockData';
import { MemoryRouter } from 'react-router-dom';
import RightItem from '../components/RightItem/RightItem';

describe('Details', async () => {
  await it('should render Details card', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <RightItem {...dataTest[0]} />
        </MemoryRouter>
      );
    });
  });
});
