import { useState } from 'react';
import RightItem from '../RightItem/RightItem';
import { IShips as ShipsCard } from '../Types/index';
import { Context } from '../../App';
import { useContext, useEffect } from 'react';
import './Modal.css';

const Modal = () => {
  const [cardChoose, setCardChoose] = useState<ShipsCard[]>([]);
  const [array, setArray] = useState<ShipsCard[]>([]);
  const [loadApi, setLoadApi] = useState(false);
  const context = useContext(Context);
  console.log(context?.open);

  const closeModal = () => {
    context?.setOpen(false);
  };

  useEffect(() => {
    if (context?.open) {
      clickNameApi();
    }
  }, []);

  async function clickNameApi() {
    setLoadApi(true);
    const clickName = localStorage.getItem('Card');
    console.log(clickName);
    const URL: string = `https://swapi.dev/api/starships/?search=${clickName}`;
    const request = new Headers();
    const res = await fetch(URL, {
      method: 'GET',
      headers: request,
    });
    const data = await res.json();
    const arr: ShipsCard[] = [];
    for (let i = 0; i < data.results.length; i++) {
      arr.push(data.results[i]);
      setCardChoose(arr);
    }
    console.log(cardChoose);
    const arrFilter: ShipsCard[] = arr.filter((el) => el.name === clickName);
    setArray(arrFilter);
    console.log(arrFilter);
    setLoadApi(false);
    console.log(loadApi);
  }

  const cardItem = array.map((el, i) => (
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

  if (context?.open) {
    return (
      <div className="modal__wrapper">
        <div className="modal__content">
          <button className="close__button" onClick={closeModal}>
            X
          </button>
          <div className="cards__container">{cardItem}</div>
        </div>
        <div className="overlay"></div>
      </div>
    );
  }

  return <div></div>;
};

export default Modal;
