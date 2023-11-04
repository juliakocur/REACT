import './Cards.css';
import { IShips as StarShips } from '../Types/index';
import { Link } from 'react-router-dom';

const Cards = (props: StarShips) => {
  return (
    <Link to={`/?page=1`} className="link">
      <div className="cards" onClick={props.onClick}>
        <h3 className="cards__header">{props.name}</h3>
        <p className="cards__description">
          Manufacturer: <span>{props.manufacturer}</span>
        </p>
        <p className="cards__description">
          Model: <span>{props.model}</span>
        </p>
        <p className="cards__description">
          Class: <span>{props.starship_class}</span>
        </p>
        <p className="cards__description">
          Passengers: <span>{props.passengers}</span>
        </p>
        <p className="cards__description">
          Length: <span>{props.length} m</span>
        </p>
      </div>
    </Link>
  );
};

export default Cards;
