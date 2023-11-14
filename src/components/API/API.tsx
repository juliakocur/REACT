import { useEffect, useState } from 'react';
import React from 'react';
import Cards from '../Cards/Cards';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import NoResultText from '../NoResultText/NoResultText';
import { Context } from '../../App';
import { IShips as ShipsCard } from '../Types/index';
import { Link } from 'react-router-dom';
import './API.css';
export const clickName: [] = [];

import { increment } from '../../store/reducers/UserSlice';
import { incrementLoad } from '../../store/reducers/UserLoading';

import { RootState } from '../../store/store';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';

export const API = () => {
  const [array, setArray] = useState<ShipsCard[]>([]);
  // const [val, setVal] = useState(false);
  const [currentItems, setCurrentItems] = useState(1);
  const [pageItems, setPageItems] = useState(true);
  const context = React.useContext(Context);
  const dispatch = useAppDispatch();
  const setPage = useAppSelector((state: RootState) => state.page.page);
  const isLoading = useAppSelector((state: RootState) => state.load.isLoading);

  useEffect(() => {
    async function createCardApi() {
      dispatch(incrementLoad(true));
      const valueLS = localStorage.getItem('Value') ?? '';
      context?.setFieldValue(valueLS);
      const contextLS = context?.fieldValue;
      const URL: string = 'https://swapi.dev/api/starships';
      const urlHasLS: string = `${URL}/?search=${contextLS}&page=${setPage}`;
      const urlPage: string = `${URL}/?page=${setPage}`;
      const url = valueLS.length > 0 ? urlHasLS : urlPage;
      const request = new Headers();
      const res = await fetch(url, {
        method: 'GET',
        headers: request,
      });
      const data = await res.json();
      if (!pageItems) {
        setArray(data.results.splice(0, 5));
      } else {
        setArray(data.results);
      }
      setCurrentItems(Math.ceil(data.count / 10));
      dispatch(incrementLoad(false));
    }
    createCardApi();
  }, [setPage]);

  const cardClick = (name: string) => {
    localStorage.setItem('Card', name);
  };

  async function createCardApi() {
    dispatch(incrementLoad(true));
    const URL: string = 'https://swapi.dev/api/starships';
    const valueLS = localStorage.getItem('Value') ?? '';
    context?.setFieldValue(valueLS);
    const contextLS = context?.fieldValue;
    const urlHasLS: string = `${URL}/?search=${contextLS}&page=1`;
    const urlPage: string = `${URL}/?page=1`;
    const url = valueLS.length > 0 ? urlHasLS : urlPage;
    const request = new Headers();
    const res = await fetch(url, {
      method: 'GET',
      headers: request,
    });
    const data = await res.json();
    if (pageItems) {
      setArray(data.results.splice(0, 5));
    } else {
      setArray(data.results);
    }
    setCurrentItems(Math.ceil(data.count / 10));
    dispatch(incrementLoad(false));
  }

  const shipItems = array.map((el, i) => (
    <Cards
      key={i}
      page={setPage}
      name={el.name}
      manufacturer={el.manufacturer}
      passengers={el.passengers}
      length={el.length}
      model={el.model}
      starship_class={el.starship_class}
      onClick={() => {
        cardClick(el.name);
        context?.setOpen(true);
      }}
    />
  ));

  const changeItemsNumber = () => {
    pageItems ? setPageItems(false) : setPageItems(true);
    dispatch(increment(1));
    createCardApi();
  };

  return (
    <>
      {isLoading ? (
        <div className="loader__container">
          <Loader />
        </div>
      ) : array.length > 0 ? (
        <div className="cards__list">
          <div className="page__items">
            <span className="page__items__text">Count of items: </span>
            <Link to={`/?page=1`}>
              <button
                className={pageItems ? 'select active__btn' : 'select'}
                onClick={changeItemsNumber}
                disabled={pageItems ? true : false}
              >
                10
              </button>
            </Link>
            <Link to={`/?page=1`}>
              <button
                className={pageItems ? 'select' : 'select active__btn'}
                onClick={changeItemsNumber}
                disabled={pageItems ? false : true}
              >
                5
              </button>
            </Link>
          </div>
          <div className="cards__container">{shipItems}</div>
          <Pagination currentPage={setPage} pageCount={currentItems} />
        </div>
      ) : (
        <NoResultText />
      )}
    </>
  );
};
