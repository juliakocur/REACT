import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
interface UserState {
  page: number;
}

const initialState: UserState = {
  page: 1,
};

export const UserSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { increment } = UserSlice.actions;
export const setPage = (state: RootState) => state.page.page;
export default UserSlice.reducer;
