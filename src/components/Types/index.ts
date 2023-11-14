export interface IShips {
  page?: number;
  name: string;
  manufacturer: string;
  passengers: number;
  length: number;
  model: string;
  starship_class: string;
  onClick?: () => void;
}

export interface IProps {
  children: React.ReactNode;
}

export interface IState {
  hasError: boolean;
}

export type IPagination = {
  currentPage: number;
  pageCount: number;
};
