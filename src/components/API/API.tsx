import { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import NoResultText from '../NoResultText/NoResultText';
import Link from 'next/link';
import './API.css';
export const clickName: [] = [];

import { incrementViewMode } from '../../store/reducers/ViewModeValue';
import { incrementPerPage } from '../../store/reducers/ItemsPerPage';
import { RootState } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

interface IData {
  name: string;
  manufacturer: string;
  passengers: number;
  length: number;
  model: string;
  starship_class: string;
}

interface IParam {
  count: number;
  results: IData[];
}

export const API = (results: IParam) => {
  const [currentItems, setCurrentItems] = useState(1);
  const [pages, setPages] = useState('1');
  const [val, setVal] = useState('');
  const dispatch = useAppDispatch();
  const itemsPerPage = useAppSelector((state: RootState) => state.items.perPage);

  useEffect(() => {
    setCurrentItems(Math.ceil(results.count / 10));
    setVal(localStorage.getItem('Value') ?? '');
  }, [results]);

  const shipItems = () => {
    if (itemsPerPage === 10) {
      return results.results.map((el, i) => (
        <Cards
          key={i}
          page={pages}
          name={el.name}
          manufacturer={el.manufacturer}
          passengers={el.passengers}
          length={el.length}
          model={el.model}
          starship_class={el.starship_class}
          onClick={() => {
            localStorage.setItem('Card', el.name);
            dispatch(incrementViewMode(true));
          }}
        />
      ));
    } else if (itemsPerPage === 5) {
      return results.results.slice(0, 5).map((el, i) => (
        <Cards
          key={i}
          page={pages}
          name={el.name}
          manufacturer={el.manufacturer}
          passengers={el.passengers}
          length={el.length}
          model={el.model}
          starship_class={el.starship_class}
          onClick={() => {
            localStorage.setItem('Card', el.name);
            dispatch(incrementViewMode(true));
          }}
        />
      ));
    }
  };
  const changeItemsNumber = () => {
    itemsPerPage === 10 ? dispatch(incrementPerPage(5)) : dispatch(incrementPerPage(10));
    setPages('1');
  };

  return (
    <>
      {results.results[0] ? (
        <div className="cards__list">
          <div className="page__items">
            <span className="page__items__text">Count of items: </span>
            <Link href={`/main?keyword=${val}&page=1`}>
              <button
                className={itemsPerPage === 10 ? 'select active__btn' : 'select'}
                onClick={changeItemsNumber}
                disabled={itemsPerPage === 10 ? true : false}
                data-testid="btn-10"
              >
                10
              </button>
            </Link>
            <Link href={`/main?keyword=${val}&page=1`}>
              <button
                className={itemsPerPage === 10 ? 'select' : 'select active__btn'}
                onClick={changeItemsNumber}
                disabled={itemsPerPage === 10 ? false : true}
                data-testid="btn-5"
              >
                5
              </button>
            </Link>
          </div>
          <div className="cards__container">{shipItems()}</div>
          <Pagination
            currentPage={pages}
            pageCount={currentItems}
            setPages={setPages}
            value={val}
          />
        </div>
      ) : (
        <NoResultText />
      )}
    </>
  );
};
