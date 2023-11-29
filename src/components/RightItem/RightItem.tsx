import { IShips as StarShips } from '../Types/index';

const RightItem = (props: StarShips) => {
  return (
    <div className="modal" data-testid="details">
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
  );
};

export default RightItem;
