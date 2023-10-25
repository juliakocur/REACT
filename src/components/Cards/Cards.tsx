import React from 'react';
import './Cards.css';
import { IShips as StarShips } from '../Types/index';

class Cards extends React.Component<StarShips> {
  constructor(props: StarShips) {
    super(props);
  }
  render() {
    return (
      <div className="cards">
        <h3 className="cards__header">{this.props.name}</h3>
        <p className="cards__description">Manufacturer: <span>{this.props.manufacturer}</span></p>
        <p className="cards__description">
          Model: <span>{this.props.model}</span>
        </p>
        <p className="cards__description">
          Class: <span>{this.props.starship_class}</span>
        </p>
        <p className="cards__description">
          Passengers: <span>{this.props.passengers}</span>
        </p>
        <p className="cards__description">
          Length: <span>{this.props.length} m</span>
        </p>
      </div>
    );
  }
}

export default Cards;
