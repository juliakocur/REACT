import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import FormData from './reducers/FormData';
import CountryValue from './reducers/CountryValue';

export const setupStore = configureStore({
  reducer: {
    value: FormData,
    country: CountryValue,
  },
});

setupListeners(setupStore.dispatch);
export type AppDispatch = typeof setupStore.dispatch;
export type RootState = ReturnType<typeof setupStore.getState>;
