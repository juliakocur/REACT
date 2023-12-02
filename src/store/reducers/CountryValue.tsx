import { createSlice } from '@reduxjs/toolkit';
import { countries } from '../../constants/countries';

const initialState: string[] = countries;

export const SearchValue = createSlice({
  name: 'country',
  initialState,
  reducers: {
    countryInput: (state) => {
      return [...state];
    },
  },
});

export const { countryInput } = SearchValue.actions;
export default SearchValue.reducer;
