import React from 'react';
import search from '../../assets/search.svg';
import logo from '../../assets/logo.png';
import ErrorButton from '../ErrorButton/ErrorButton';
import './Search.css';

class Search extends React.Component {
  state = {
    value: localStorage.getItem('Value') ?? '',
  };

  componentWillUnmount(): void {
    localStorage.setItem('Value', this.state.value);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: event.target.value });
    localStorage.setItem('Value', event.target.value);
  };

  render() {
    return (
      <div className="search">
        <img src={logo} className="logo" alt="logo"></img>
        <form className="search__form">
          <input
            className="search__field"
            type="text"
            placeholder="search ..."
            value={this.state.value}
            onInput={this.handleChange}
          />
          <input type="submit" value="" className="search__button" />
          <img src={search} className="search__icon" alt="icon"></img>
        </form>
        <ErrorButton />
      </div>
    );
  }
}

export default Search;
