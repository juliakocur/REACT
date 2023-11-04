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

export const API = () => {
  const [array, setArray] = useState<ShipsCard[]>([]);
  const [val, setVal] = useState(false);
  const [currentItems, setCurrentItems] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageItems, setPageItems] = useState(true);
  const context = React.useContext(Context);

  useEffect(() => {
    async function createCardApi() {
      setVal(true);
      const URL: string = 'https://swapi.dev/api/starships';
      const urlHasLS: string = `${URL}/?search=${localStorage.getItem(
        'Value'
      )}&page=${currentPage}`;
      const urlPage: string = `${URL}/?page=${currentPage}`;
      const valueLS = localStorage.getItem('Value') ?? '';
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
      setVal(false);
    }
    createCardApi();
  }, [currentPage]);

  const cardClick = (name: string) => {
    localStorage.setItem('Card', name);
  };

  async function createCardApi() {
    setVal(true);
    const URL: string = 'https://swapi.dev/api/starships';
    const urlHasLS: string = `${URL}/?search=${localStorage.getItem('Value')}&page=1`;
    const urlPage: string = `${URL}/?page=1`;
    const valueLS = localStorage.getItem('Value') ?? '';
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
    setVal(false);
  }

  const shipItems = array.map((el, i) => (
    <Cards
      key={i}
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
    setCurrentPage(1);
    createCardApi();
  };

  return (
    <>
      {val ? (
        <div className="loader__container">
          <Loader />
        </div>
      ) : array.length > 0 ? (
        <div className="cards__list">
          <div className="page__items">
            <span className="page__items__text">Count of items: </span>
            <Link to={`/?page=1`}>
              <button
                className={pageItems ? 'select active' : 'select'}
                onClick={changeItemsNumber}
                disabled={pageItems ? true : false}
              >
                10
              </button>
            </Link>
            <Link to={`/?page=1`}>
              <button
                className={pageItems ? 'select' : 'select active'}
                onClick={changeItemsNumber}
                disabled={pageItems ? false : true}
              >
                5
              </button>
            </Link>
          </div>
          <div className="cards__container">{shipItems}</div>
          <Pagination
            currentPage={currentPage}
            pageCount={currentItems}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <NoResultText />
      )}
    </>
  );
};
