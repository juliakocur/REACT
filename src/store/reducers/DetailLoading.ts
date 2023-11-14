import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
interface UserState {
  isLoading: boolean;
}

const initialState: UserState = {
  isLoading: false,
};

export const DetailLoading = createSlice({
  name: 'load',
  initialState,
  reducers: {
    incrementLoadDetail: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { incrementLoadDetail } = DetailLoading.actions;
export const setLoad = (state: RootState) => state.loadDetail.isLoading;
export default DetailLoading.reducer;
