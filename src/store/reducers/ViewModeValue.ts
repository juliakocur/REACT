import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
interface UserState {
  isMode: boolean;
}

const initialState: UserState = {
  isMode: false,
};

export const ViewModeValue = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    incrementViewMode: (state, action: PayloadAction<boolean>) => {
      state.isMode = action.payload;
    },
  },
});

export const { incrementViewMode } = ViewModeValue.actions;
export const viewMode = (state: RootState) => state.mode.isMode;
export default ViewModeValue.reducer;
