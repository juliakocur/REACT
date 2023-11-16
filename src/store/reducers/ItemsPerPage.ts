import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
interface UserState {
  perPage: number;
}

const initialState: UserState = {
  perPage: 10,
};

export const ItemsPerPage = createSlice({
  name: 'perPage',
  initialState,
  reducers: {
    incrementPerPage: (state, action: PayloadAction<number>) => {
      state.perPage = action.payload;
    },
  },
});

export const { incrementPerPage } = ItemsPerPage.actions;
export const pageItems = (state: RootState) => state.items.perPage;
export default ItemsPerPage.reducer;
