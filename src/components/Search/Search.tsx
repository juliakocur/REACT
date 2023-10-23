import React from 'react';
import search from '../../assets/search.svg';
import logo from '../../assets/logo.png';
import './Search.css';

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <img src={logo} className="logo" alt="logo"></img>
        <input className="search__field" type="text" placeholder="search ..." />
        <img src={search} className="search__icon" alt="icon"></img>
      </div>
    );
  }
}

export default Search;
