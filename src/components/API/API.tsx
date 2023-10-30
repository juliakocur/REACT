import { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import NoResultText from '../NoResultText/NoResultText';

import { IShips as ShipsCard } from '../Types/index';
import './API.css';

const API = () => {
  const [array, setArray] = useState<ShipsCard[]>([]);
  const [val, setVal] = useState(false);
  const [currentItems, setCurrentItems] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

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
      console.log(data);
      setArray(data.results);
      setCurrentItems(Math.ceil(data.count / 10));
      setVal(false);
    }
    createCardApi();
  }, [currentPage]);

  const shipItems = array.map((el, i) => (
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

export default API;
