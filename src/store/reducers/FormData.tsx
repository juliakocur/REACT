import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormType {
  id?: string;
  name: string | undefined;
  age: number | string | undefined;
  email: string | undefined;
  password: string | undefined;
  confPassword: string | undefined;
  photo: string | undefined;
  country: string | undefined;
  gender: string | undefined;
  conf: string | boolean | undefined;
}

const initialState = [] as FormType[];

export const FormData = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<FormType>) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = FormData.actions;
export default FormData.reducer;
