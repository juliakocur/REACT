export interface IShips {
  name: string;
  manufacturer: string;
  passengers: number;
  length: number;
  model: string;
  starship_class: string;
}

export interface IProps {
  children: React.ReactNode;
}

export interface IState {
  hasError: boolean;
}
