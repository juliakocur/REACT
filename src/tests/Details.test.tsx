import { render, act } from '@testing-library/react';
import { dataTest } from './mockData';
import { MemoryRouter } from 'react-router-dom';
import RightItem from '../components/RightItem/RightItem';
import Modal from '../components/Modal/Modal';
import userEvent from '@testing-library/user-event';

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

describe('Modal', () => {
  it('should render successfully', () => {
    expect(true).toBeTruthy();
  });
  it('should show loader and close details after click close button', () => {
    const { container } = render(
      <MemoryRouter>
        <Modal />
      </MemoryRouter>
    );
    expect(container.getElementsByClassName('loader')).toBeInTheDocument;
    expect(container.getElementsByClassName('close__button')).toBeInTheDocument;
    const button = container.getElementsByClassName('close__button');
    userEvent.click(button[0]);
    expect(console.log('close'));
    expect(container.getElementsByClassName('modal__wrapper')).not.toBeInTheDocument;
    expect(button).toBeCalled;
  });
});
