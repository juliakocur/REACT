import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import UserSlice from './reducers/UserSlice';

export const setupStore = configureStore({
  reducer: {
    page: UserSlice,
  },
});

setupListeners(setupStore.dispatch);
export type AppDispatch = typeof setupStore.dispatch;
export type RootState = ReturnType<typeof setupStore.getState>;
