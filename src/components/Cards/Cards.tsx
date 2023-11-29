import { IShips as StarShips } from '../Types/index';
import Link from 'next/link';

const Cards = (props: StarShips) => {
  return (
    <Link className="cards__link" href={`/main?page=${props.page}&search=${props.name}`}>
      <div className="cards" data-testid="card-test" onClick={props.onClick}>
        <h3 className="cards__header">{props.name}</h3>
        <p className="cards__description">
          Manufacturer: <span className="cards__span">{props.manufacturer}</span>
        </p>
        <p className="cards__description">
          Model: <span className="cards__span">{props.model}</span>
        </p>
        <p className="cards__description">
          Class: <span className="cards__span">{props.starship_class}</span>
        </p>
        <p className="cards__description">
          Passengers: <span className="cards__span">{props.passengers}</span>
        </p>
        <p className="cards__description">
          Length: <span className="cards__span">{props.length} m</span>
        </p>
      </div>
    </Link>
  );
};

export default Cards;
