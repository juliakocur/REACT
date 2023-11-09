import { describe, it } from 'vitest';
import { render, screen, act, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Cards from '../components/Cards/Cards';
import { dataTest } from './mockData';
import { MemoryRouter } from 'react-router-dom';

describe('Cards', () => {
  it('should render Cards component', () => {
    render(
      <MemoryRouter>
        <Cards {...dataTest[0]} />
      </MemoryRouter>
    );
  });
});

describe('API', () => {
  const shipItems = dataTest.map((el, i) => (
    <Cards
      key={i}
      name={el.name}
      manufacturer={el.manufacturer}
      passengers={el.passengers}
      length={el.length}
      model={el.model}
      starship_class={el.starship_class}
    />
  ));

  it('should render as much cards as array has(10)', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <div className="page__items">
            <span className="page__items__text">Count of items: </span>
            <button>10</button>
            <button>5</button>
          </div>
          <div className="cards__container">{shipItems}</div>
        </MemoryRouter>
      );
    });
    await waitFor(() => {
      expect(screen.getAllByTestId('card-test')).toHaveLength(10);
    });
    const ten = screen.getByText('10');
    await userEvent.click(ten);
    await waitFor(() => {
      expect(screen.getAllByTestId('card-test')).toHaveLength(10);
    });
  });
});

describe('API', () => {
  const shipItemsFive = dataTest
    .splice(0, 5)
    .map((el, i) => (
      <Cards
        key={i}
        name={el.name}
        manufacturer={el.manufacturer}
        passengers={el.passengers}
        length={el.length}
        model={el.model}
        starship_class={el.starship_class}
      />
    ));

  it('should render as much cards as array has(5)', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <div className="page__items">
            <span className="page__items__text">Count of items: </span>
            <button>10</button>
            <button>5</button>
          </div>
          <div className="cards__container">{shipItemsFive}</div>
        </MemoryRouter>
      );
    });
    const five = screen.getByText('5');
    await userEvent.click(five);
    await waitFor(() => {
      expect(screen.getAllByTestId('card-test')).toHaveLength(5);
    });
  });
});
