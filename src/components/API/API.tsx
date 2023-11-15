import { useEffect, useState } from 'react';
import React from 'react';
import Cards from '../Cards/Cards';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import NoResultText from '../NoResultText/NoResultText';
import { Link } from 'react-router-dom';
import './API.css';
export const clickName: [] = [];

import { incrementPerPage } from '../../store/reducers/ItemsPerPage';
import { incrementViewMode } from '../../store/reducers/ViewModeValue';

import { RootState } from '../../store/store';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { useGetStarshipsQuery } from '../../store/reducers/CreateApi';

export const API = () => {
  const [currentItems, setCurrentItems] = useState(1);
  const [pages, setPages] = useState('1');
  const dispatch = useAppDispatch();
  const itemsPerPage = useAppSelector((state: RootState) => state.items.perPage);
  const { data: param, isFetching } = useGetStarshipsQuery(pages);

  useEffect(() => {
    async function createCardApi() {
      if (param?.count) {
        setCurrentItems(Math.ceil(param?.count / 10));
      }
    }
    createCardApi();
  }, [param]);

  const cardClick = (name: string) => {
    localStorage.setItem('Card', name);
  };

  async function createCardApi() {
    if (param?.count) {
      setCurrentItems(Math.ceil(param?.count / 10));
    }
  }

  const shipItems = () => {
    if (itemsPerPage === 10) {
      return param?.results.map((el, i) => (
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
            cardClick(el.name);
            dispatch(incrementViewMode(true));
          }}
        />
      ));
    } else if (itemsPerPage === 5) {
      return param?.results.slice(0, 5).map((el, i) => (
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
            cardClick(el.name);
            dispatch(incrementViewMode(true));
          }}
        />
      ));
    }
  };
  const changeItemsNumber = () => {
    itemsPerPage === 10 ? dispatch(incrementPerPage(5)) : dispatch(incrementPerPage(10));
    setPages('1');
    createCardApi();
  };

  if (isFetching)
    return (
      <div className="loader__container">
        <Loader />
      </div>
    );

  return (
    <>
      {param?.results[0] ? (
        <div className="cards__list">
          <div className="page__items">
            <span className="page__items__text">Count of items: </span>
            <Link to={`/?page=1`}>
              <button
                className={itemsPerPage === 10 ? 'select active__btn' : 'select'}
                onClick={changeItemsNumber}
                disabled={itemsPerPage === 10 ? true : false}
                data-testid="btn-10"
              >
                10
              </button>
            </Link>
            <Link to={`/?page=1`}>
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
          <Pagination currentPage={pages} pageCount={currentItems} setPages={setPages} />
        </div>
      ) : (
        <NoResultText />
      )}
    </>
  );
};
