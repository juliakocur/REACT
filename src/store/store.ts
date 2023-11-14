import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import UserSlice from './reducers/UserSlice';
import MainLoading from './reducers/MainLoading';
import DetailLoading from './reducers/DetailLoading';
import SearchValue from './reducers/SearchValue';
import ItemsPerPage from './reducers/ItemsPerPage';
import ViewModeValue from './reducers/ViewModeValue';

export const setupStore = configureStore({
  reducer: {
    page: UserSlice,
    load: MainLoading,
    loadDetail: DetailLoading,
    value: SearchValue,
    items: ItemsPerPage,
    mode: ViewModeValue,
  },
});

setupListeners(setupStore.dispatch);
export type AppDispatch = typeof setupStore.dispatch;
export type RootState = ReturnType<typeof setupStore.getState>;
