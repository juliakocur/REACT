import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
export default DetailLoading.reducer;
