import React from 'react';
import './Cards.css';

class Cards extends React.Component {
  render() {
    return (
      <div className="cards">
        <h4>Ship name</h4>
        <p>Ship description 1</p>
        <p>Ship description 2</p>
        <p>Ship description 3</p>
      </div>
    );
  }
}

export default Cards;
