import { useState, useEffect } from 'react';
import RightItem from '../RightItem/RightItem';
import Router from 'next/router';

import Loader from '../Loader/Loader';
import { useOutsideClick } from '../../useOutsideClick';

import { incrementViewMode } from '../../store/reducers/ViewModeValue';
import { RootState } from '../../store/store';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { IParam } from '../Types/index';

const Modal = (results: IParam) => {
  const [item, setItem] = useState('');
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const viewMode = useAppSelector((state: RootState) => state.mode.isMode);

  const closeModal = () => {
    dispatch(incrementViewMode(false));
    window.location.href = `main?page=1&keyword=${localStorage.getItem('Value')}`;
  };

  const ref = useOutsideClick(() => {
    closeModal();
  });

  useEffect(() => {
    const LS = localStorage.getItem('Card');
    setItem(LS ?? '');
    if (results) {
      for (let i = 0; i < results.results.length; i++) {
        if (results.results[i].name === item) {
          setIndex(i);
        }
      }
    }
  }, [viewMode, results]);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  if (viewMode) {
    return (
      <>
        {loading ? (
          <div className="modal__wrapper" data-testid="modal">
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
          <div className="modal__wrapper" data-testid="modal">
            <div className="modal__content" ref={ref}>
              <button className="close__button" onClick={closeModal} data-testid="close">
                X
              </button>
              <div className="cards__container">
                {results.results.slice(index, index + 1).map((el, i) => (
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
  }
  return <div></div>;
};

export default Modal;
