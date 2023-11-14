import { useState } from 'react';
import RightItem from '../RightItem/RightItem';
import { IShips as ShipsCard } from '../Types/index';

import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useOutsideClick } from '../../useOutsideClick';

import './Modal.css';

import { incrementLoadDetail } from '../../store/reducers/DetailLoading';
import { incrementViewMode } from '../../store/reducers/ViewModeValue';
import { RootState } from '../../store/store';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';

const Modal = () => {
  const [cardChoose, setCardChoose] = useState<ShipsCard[]>([]);
  const [array, setArray] = useState<ShipsCard[]>([]);
  const [val, setVal] = useState(false);
  const dispatch = useAppDispatch();
  const viewMode = useAppSelector((state: RootState) => state.mode.isMode);

  const closeModal = () => {
    dispatch(incrementViewMode(false));
  };

  const ref = useOutsideClick(() => {
    closeModal();
  });

  useEffect(() => {
    if (viewMode) {
      clickNameApi();
    }
  }, [viewMode]);

  async function clickNameApi() {
    setVal(true);
    dispatch(incrementLoadDetail(true));
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
    console.log(cardChoose);
    dispatch(incrementLoadDetail(false));
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

  if (viewMode) {
    return (
      <>
        {val ? (
          <div className="modal__wrapper" data-testid="modal">
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
          <div className="modal__wrapper" data-testid="modal">
            <div className="modal__content" ref={ref}>
              <button className="close__button" onClick={closeModal} data-testid="close">
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

  return <div className="no__modal" data-testid="not-modal" onClick={closeModal}></div>;
};

export default Modal;
