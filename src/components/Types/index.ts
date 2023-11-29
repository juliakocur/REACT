export interface IShips {
  page?: string;
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
  currentPage: string;
  pageCount: number;
  setPages: (page: string) => void;
  value: string;
};

export interface IData {
  name: string;
  manufacturer: string;
  passengers: number;
  length: number;
  model: string;
  starship_class: string;
}

export interface IParam {
  count: number;
  results: IData[];
}
