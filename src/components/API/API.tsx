import { useEffect, useState } from 'react';
import React from 'react';
import Cards from '../Cards/Cards';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import NoResultText from '../NoResultText/NoResultText';
import { Context } from '../../App';
import { IShips as ShipsCard } from '../Types/index';
import './API.css';
export const clickName: [] = [];

export const API = () => {
  const [array, setArray] = useState<ShipsCard[]>([]);
  const [val, setVal] = useState(false);
  const [currentItems, setCurrentItems] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const context = React.useContext(Context);
  console.log(context?.open);

  useEffect(() => {
    async function createCardApi() {
      console.log('I render');
      setVal(true);
      console.log(context);
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
      setArray(data.results);
      setCurrentItems(Math.ceil(data.count / 10));
      setVal(false);
    }
    createCardApi();
  }, [currentPage]);

  const cardClick = (name: string) => {
    localStorage.setItem('Card', name);
  };

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

  return (
    <>
      {val ? (
        <div className="loader__container">
          <Loader />
        </div>
      ) : array.length > 0 ? (
        <div className="cards__list">
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
