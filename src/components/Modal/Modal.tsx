import { useState } from 'react';
import RightItem from '../RightItem/RightItem';
import { IShips as ShipsCard } from '../Types/index';
import { Context } from '../../App';
import { useContext, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useOutsideClick } from '../../useOutsideClick';

import './Modal.css';

const Modal = () => {
  const [cardChoose, setCardChoose] = useState<ShipsCard[]>([]);
  const [array, setArray] = useState<ShipsCard[]>([]);
  const [loadApi, setLoadApi] = useState(false);
  const [val, setVal] = useState(false);
  const context = useContext(Context);

  const closeModal = () => {
    context?.setOpen(false);
  };

  const ref = useOutsideClick(() => {
    closeModal();
  });

  useEffect(() => {
    if (context?.open) {
      clickNameApi();
    }
  }, []);

  async function clickNameApi() {
    setVal(true);
    setLoadApi(true);
    const clickName = localStorage.getItem('Card');
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
    const arrFilter: ShipsCard[] = arr.filter((el) => el.name === clickName);
    setArray(arrFilter);
    console.log(arrFilter);
    console.log(loadApi);
    console.log(cardChoose);
    setLoadApi(false);
    setVal(false);
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
      <>
        {val ? (
          <div className="modal__wrapper">
            <div className="modal__content" ref={ref}>
              <button className="close__button" onClick={closeModal}>
                X
              </button>
              <div className="loader__container">
                <Loader />
              </div>
            </div>
            <div className="overlay"></div>
          </div>
        ) : (
          <div className="modal__wrapper">
            <div className="modal__content" ref={ref}>
              <button className="close__button" onClick={closeModal}>
                X
              </button>
              <div className="cards__container">{cardItem}</div>
            </div>
            <div className="overlay"></div>
          </div>
        )}
      </>
    );
  }

  return <div></div>;
};

export default Modal;
