import { useState, useEffect } from 'react';
import RightItem from '../RightItem/RightItem';

import Loader from '../Loader/Loader';
import { useOutsideClick } from '../../useOutsideClick';
import './Modal.css';

import { incrementViewMode } from '../../store/reducers/ViewModeValue';
import { RootState } from '../../store/store';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { useGetStarshipQuery } from '../../store/reducers/CreateApi';

const Modal = () => {
  const [item, setItem] = useState('');
  const dispatch = useAppDispatch();
  const viewMode = useAppSelector((state: RootState) => state.mode.isMode);
  const { data: param, isFetching } = useGetStarshipQuery(item);

  const closeModal = () => {
    dispatch(incrementViewMode(false));
  };

  const ref = useOutsideClick(() => {
    closeModal();
  });

  useEffect(() => {
    const LS = localStorage.getItem('Card');
    setItem(LS ?? '');
  }, [viewMode]);

  return (
    <>
      {isFetching ? (
        <div className={!viewMode ? 'modal__wrapper right' : 'modal__wrapper'} data-testid="modal">
          <div className="modal__content" ref={ref}>
            <button className="close__button" onClick={closeModal} data-testid="close">
              X
            </button>
            <div className="loader__container">
              <Loader />
            </div>
          </div>
          <div className="overlay" data-testid="overlay"></div>
        </div>
      ) : (
        <div className={!viewMode ? 'modal__wrapper right' : 'modal__wrapper'} data-testid="modal">
          <div className="modal__content" ref={ref}>
            <button className="close__button" onClick={closeModal} data-testid="close">
              X
            </button>
            <div className="cards__container">
              {param?.results
                .slice(0, 1)
                .map((el, i) => (
                  <RightItem
                    key={i}
                    name={el.name}
                    manufacturer={el.manufacturer}
                    passengers={el.passengers}
                    length={el.length}
                    model={el.model}
                    starship_class={el.starship_class}
                  />
                ))}
            </div>
          </div>
          <div className="overlay" data-testid="overlay"></div>
        </div>
      )}
    </>
  );
};

export default Modal;
