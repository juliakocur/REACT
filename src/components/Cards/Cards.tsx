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
        <h4>{this.props.name}</h4>
        <p>Manufacturer: {this.props.manufacturer}</p>
        <p>Passengers: {this.props.passengers}</p>
        <p>Length: {this.props.length} m</p>
      </div>
    );
  }
}

export default Cards;
