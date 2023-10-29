import { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Loader from '../Loader/Loader';
import NoResultText from '../NoResultText/NoResultText';

import { IShips as ShipsCard } from '../Types/index';
import './API.css';

const API = () => {
  const [array, setArray] = useState<ShipsCard[]>([]);
  const [val, setVal] = useState(false);

  useEffect(() => {
    async function createCardApi() {
      setVal(true);
      const URL: string = 'https://swapi.dev/api/starships';
      const valueLS = localStorage.getItem('Value') ?? '';
      const url = valueLS.length > 0 ? `${URL}?search=${valueLS}` : URL;
      const request = new Headers();
      const res = await fetch(url, {
        method: 'GET',
        headers: request,
      });
      const data = await res.json();
      console.log(data);
      setArray(data.results);
      console.log(array);
      setVal(false);
    }
    createCardApi();
  }, []);

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
        <div className="cards__container">{shipItems}</div>
      ) : (
        <NoResultText />
      )}
    </>
  );
};

export default API;
