import React from 'react';
import Search from './components/Search/Search';
import Cards from './components/Cards/Cards';
import { ICard as ShipsCard } from './components/Types/index';
import './App.css';

class App extends React.Component {
  array: ShipsCard[] = [];

  getShips = async (URL: string) => {
    const request = new Headers();
    const res = await fetch(URL, {
      method: 'GET',
      headers: request,
    });
    const data = await res.json();
    console.log(data);
    this.setState({});
    this.array = data.results;
    console.log(this.array);
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
        <div className="cards__container">{shipItems}</div>
      </>
    );
  }
}

export default App;
