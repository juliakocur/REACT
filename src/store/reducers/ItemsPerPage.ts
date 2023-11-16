import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IStar {
  page?: string;
  name: string;
  manufacturer: string;
  passengers: number;
  length: number;
  model: string;
  starship_class: string;
  onClick?: () => void;
}

const initialState = [] as IStar[];

export const ItemsPerPage = createSlice({
  name: 'perPage',
  initialState,
  reducers: {
    incrementPerPage: (state, action: PayloadAction<IStar[]>) => {
      state.push(...action.payload);
    },
    decrementPerPage: (state) => {
      state.length = 0;
    },
  },
});

export const { incrementPerPage } = ItemsPerPage.actions;
export const { decrementPerPage } = ItemsPerPage.actions;
export const selectItemsPerPage = (state: RootState) => state.items;
export default ItemsPerPage.reducer;
