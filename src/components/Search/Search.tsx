import React from 'react';
import search from '../../assets/search.svg';
import './Search.css';

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <input className="search__field" type="text" placeholder="search ..." />
        <img src={search} className="search__icon" alt="icon"></img>
      </div>
    );
  }
}

export default Search;
