import { useEffect, useState } from 'react';
import React from 'react';
import Cards from '../Cards/Cards';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import NoResultText from '../NoResultText/NoResultText';
import { Context } from '../../App';
import { Link } from 'react-router-dom';
import './API.css';
export const clickName: [] = [];

import { incrementLoad } from '../../store/reducers/MainLoading';
import { incrementPerPage } from '../../store/reducers/ItemsPerPage';
import { incrementViewMode } from '../../store/reducers/ViewModeValue';

import { RootState } from '../../store/store';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { useGetStarshipsQuery } from '../../store/reducers/CreateApi';

export const API = () => {
  const [currentItems, setCurrentItems] = useState(1);
  const [pages, setPages] = useState('1');
  const context = React.useContext(Context);
  const dispatch = useAppDispatch();
  const itemsPerPage = useAppSelector((state: RootState) => state.items.perPage);
  const { data: param, isLoading } = useGetStarshipsQuery(pages);

  useEffect(() => {
    async function createCardApi() {
      dispatch(incrementLoad(true));
      const valueLS = localStorage.getItem('Value') ?? '';
      context?.setFieldValue(valueLS);
      if (param?.count) {
        setCurrentItems(Math.ceil(param?.count / 10));
      }
      dispatch(incrementLoad(false));
    }
    createCardApi();
  }, [param]);

  const cardClick = (name: string) => {
    localStorage.setItem('Card', name);
  };

  async function createCardApi() {
    dispatch(incrementLoad(true));
    const valueLS = localStorage.getItem('Value') ?? '';
    context?.setFieldValue(valueLS);
    if (param?.count) {
      setCurrentItems(Math.ceil(param?.count / 10));
    }
    dispatch(incrementLoad(false));
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

  return (
    <>
      {isLoading ? (
        <div className="loader__container">
          <Loader />
        </div>
      ) : param?.results ? (
        <div className="cards__list">
          <div className="page__items">
            <span className="page__items__text">Count of items: </span>
            <Link to={`/?page=1`}>
              <button
                className={itemsPerPage === 10 ? 'select active__btn' : 'select'}
                onClick={changeItemsNumber}
                disabled={itemsPerPage === 10 ? true : false}
              >
                10
              </button>
            </Link>
            <Link to={`/?page=1`}>
              <button
                className={itemsPerPage === 10 ? 'select' : 'select active__btn'}
                onClick={changeItemsNumber}
                disabled={itemsPerPage === 10 ? false : true}
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
