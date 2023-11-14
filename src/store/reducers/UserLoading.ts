import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
interface UserState {
  isLoading: boolean;
}

const initialState: UserState = {
  isLoading: false,
};

export const UserLoading = createSlice({
  name: 'load',
  initialState,
  reducers: {
    incrementLoad: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { incrementLoad } = UserLoading.actions;
export const setLoad = (state: RootState) => state.load.isLoading;
export default UserLoading.reducer;
