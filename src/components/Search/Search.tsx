import { useEffect } from 'react';
import React from 'react';
import search from '../../assets/search.svg';
import logo from '../../assets/logo.png';
import ErrorButton from '../ErrorButton/ErrorButton';
import './Search.css';

import { incrementInput } from '../../store/reducers/SearchValue';
import { RootState } from '../../store/store';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';

const Search = () => {
  const inputValue = useAppSelector((state: RootState) => state.value.input);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(incrementInput(event.target.value));
    localStorage.setItem('Value', event.target.value);
  };

  const saveData = (): void => {
    localStorage.setItem('Value', inputValue);
    console.log(inputValue);
  };

  const clickCTA = (): void => {
    dispatch(incrementInput(localStorage.getItem('Value') ?? ''));
  };

  useEffect(() => {
    localStorage.setItem('Value', inputValue);
  }, [inputValue]);

  return (
    <div className="search">
      <img src={logo} className="logo" alt="logo"></img>
      <form className="search__form" data-testid="search-form" onSubmit={saveData}>
        <input
          id="name"
          data-testid="search-field"
          className="search__field"
          type="text"
          placeholder="search ..."
          value={inputValue}
          onChange={handleChange}
        />
        <input type="submit" value="" className="search__button" data-testid="click" />
        <button className="searchClick" onClick={clickCTA}>
          <img src={search} className="search__icon" alt="icon"></img>
        </button>
      </form>
      <ErrorButton />
    </div>
  );
};

export default Search;
