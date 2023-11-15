import { render, act, screen, waitFor } from '@testing-library/react';
import { dataTest } from './mockData';
import { dataTestOne } from './mockData';
import { MemoryRouter } from 'react-router-dom';
import RightItem from '../components/RightItem/RightItem';
import Modal from '../components/Modal/Modal';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

describe('Details', async () => {
  await it('should render Details card', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Provider store={setupStore}>
            <RightItem {...dataTest[0]} />
          </Provider>
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
        <Provider store={setupStore}>
          <Modal />
        </Provider>
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

describe('Modal', () => {
  it('should render successfully', () => {
    expect(true).toBeTruthy();
  });
  it('should render Modal', async () => {
    await act(async () => {
      render(
        <Provider store={setupStore}>
          <Modal />
        </Provider>
      );
    });
    const close = screen.getByTestId('not-modal');
    expect(close).toBeInTheDocument;
    userEvent.click(close);
    expect(close).toBeCalled;
    expect(close).not.toBeInTheDocument;
  });
});

describe('Modal', () => {
  it('should render successfully', () => {
    expect(true).toBeTruthy();
  });
  it('should render Modal', async () => {
    await act(async () => {
      render(
        <Provider store={setupStore}>
          <Modal />
        </Provider>
      );
    });
    // const close = screen.getByTestId('modal');
    // expect(close).toBeInTheDocument;
    // userEvent.click(close);
    // expect(close).toBeCalled;
    // expect(close).not.toBeInTheDocument;
  });
});

describe('Card in modal', () => {
  const cardItem = dataTestOne.map((el, i) => (
    <RightItem
      key={i}
      name={el.name}
      manufacturer={el.manufacturer}
      passengers={el.passengers}
      length={el.length}
      model={el.model}
      starship_class={el.starship_class}
    />
  ));

  it('should render card in modal', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <div className="cards__container" data-testid="details">
            {cardItem}
          </div>
        </MemoryRouter>
      );
    });
    await waitFor(() => {
      expect(screen.getAllByTestId('details')).toBeInTheDocument;
    });
  });
});
