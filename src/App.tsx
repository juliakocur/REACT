import React from 'react';
import Search from './components/Search/Search';
import Cards from './components/Cards/Cards';
import Loader from './components/Loader/Loader';

import { ICard as ShipsCard } from './components/Types/index';
import './App.css';

class App extends React.Component {
  array: ShipsCard[] = [];
  val: boolean = true;

  getShips = async (URL: string) => {
    this.val = false;
    const request = new Headers();
    const res = await fetch(URL, {
      method: 'GET',
      headers: request,
    });
    const data = await res.json();
    this.array = data.results;
    console.log(this.array);
    this.setState({});
    await this.val;
  };

  componentDidMount(): void {
    const value = localStorage.getItem('Value') ?? '';
    if (value.length > 0) {
      this.getShips(`https://swapi.dev/api/starships/?search=${value}`);
    } else {
      this.getShips('https://swapi.dev/api/starships');
    }
  }

  render() {
    const shipItems = this.array.map((el, i) => (
      <Cards
        key={i}
        name={el.name}
        manufacturer={el.manufacturer}
        passengers={el.passengers}
        length={el.length}
      />
    ));

    return (
      <>
        <Search />
        {this.val ? (
          <div className="loader__container">
            <Loader />
          </div>
        ) : (
          <div className="cards__container">{shipItems}</div>
        )}
      </>
    );
  }
}

export default App;
