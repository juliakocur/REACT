import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
interface UserState {
  input: string;
}

const value = localStorage.getItem('Value');
const initialState: UserState = {
  input: value ?? '',
};

export const SearchValue = createSlice({
  name: 'input',
  initialState,
  reducers: {
    incrementInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
  },
});

export const { incrementInput } = SearchValue.actions;
export const setPage = (state: RootState) => state.value.input;
export default SearchValue.reducer;
