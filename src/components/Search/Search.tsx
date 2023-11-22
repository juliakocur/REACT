import { useEffect } from 'react';
import React from 'react';
import search from '../../assets/search.svg';
import logo from '../../assets/logo.png';
import ErrorButton from '../ErrorButton/ErrorButton';
import Image from 'next/image';
import './Search.css';
import Router from 'next/router';

import { incrementInput } from '../../store/reducers/SearchValue';
import { RootState } from '../../store/store';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';

const Search = () => {
  const inputValue = useAppSelector((state: RootState) => state.value.input);
  const dispatch = useAppDispatch();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(incrementInput(event.target.value));
    await localStorage.setItem('Value', event.target.value);
    if (inputValue) {
      await Router.push({
        pathname: process.env.BASE_URL,
        query: { keyword: localStorage.getItem('Value'), page: 1 },
      });
    }
  };

  const saveData = (): void => {
    localStorage.setItem('Value', inputValue);
    console.log(inputValue);
  };

  const clickCTA = (): void => {
    dispatch(incrementInput(localStorage.getItem('Value') ?? ''));
    console.log('close');
  };

  useEffect(() => {
    localStorage.setItem('Value', inputValue);
  }, [inputValue]);

  return (
    <div className="search" data-testid="search">
      <Image src={logo} className="logo" alt="logo" />
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
        <button className="searchClick" data-testid="cta-button" onClick={clickCTA}>
          <Image src={search} className="search__icon" alt="icon" />
        </button>
      </form>
      <ErrorButton />
    </div>
  );
};

export default Search;
