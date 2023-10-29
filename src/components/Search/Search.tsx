import { useState, useEffect } from 'react';
import search from '../../assets/search.svg';
import logo from '../../assets/logo.png';
import ErrorButton from '../ErrorButton/ErrorButton';
import './Search.css';

const Search = () => {
  const [value, setValue] = useState(localStorage.getItem('Value') ?? '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    localStorage.setItem('Value', event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('Value', value);
  }, [value]);

  return (
    <div className="search">
      <img src={logo} className="logo" alt="logo"></img>
      <form className="search__form">
        <input
          className="search__field"
          type="text"
          placeholder="search ..."
          value={value}
          onInput={handleChange}
        />
        <input type="submit" value="" className="search__button" />
        <img src={search} className="search__icon" alt="icon"></img>
      </form>
      <ErrorButton />
    </div>
  );
};

export default Search;
