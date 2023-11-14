import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import UserSlice from './reducers/UserSlice';
import MainLoading from './reducers/MainLoading';
import DetailLoading from './reducers/DetailLoading';

export const setupStore = configureStore({
  reducer: {
    page: UserSlice,
    load: MainLoading,
    loadDetail: DetailLoading,
  },
});

setupListeners(setupStore.dispatch);
export type AppDispatch = typeof setupStore.dispatch;
export type RootState = ReturnType<typeof setupStore.getState>;
