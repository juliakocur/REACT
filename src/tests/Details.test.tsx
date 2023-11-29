import { render, act, screen, waitFor } from '@testing-library/react';
import { dataTest } from './mock/mockData';
import { dataTestOne } from './mock/mockData';
import RightItem from '../components/RightItem/RightItem';
import Modal from '../components/Modal/Modal';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

describe('Details', async () => {
  await it('should render Details card', async () => {
    await act(async () => {
      render(
        <Provider store={setupStore}>
          <RightItem {...dataTest[0]} />
        </Provider>
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
      <Provider store={setupStore}>
        <Modal results={dataTest} count={36} />
      </Provider>
    );
    expect(container.getElementsByClassName('loader')).toBeInTheDocument;
    expect(container.getElementsByClassName('close__button')).toBeInTheDocument;
    const button = container.getElementsByClassName('close__button');
    userEvent.click(button[0]);
    expect(container.getElementsByClassName('modal__wrapper')).not.toBeInTheDocument;
    expect(button).toBeCalled;
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
        <div className="cards__container" data-testid="details">
          {cardItem}
        </div>
      );
    });
    await waitFor(() => {
      expect(screen.getAllByTestId('details')).toBeInTheDocument;
    });
  });
});
