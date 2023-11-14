import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import MainLoading from './reducers/MainLoading';
import DetailLoading from './reducers/DetailLoading';
import SearchValue from './reducers/SearchValue';
import ItemsPerPage from './reducers/ItemsPerPage';
import ViewModeValue from './reducers/ViewModeValue';
import { CreateApi } from './reducers/CreateApi';

export const setupStore = configureStore({
  reducer: {
    load: MainLoading,
    loadDetail: DetailLoading,
    value: SearchValue,
    items: ItemsPerPage,
    mode: ViewModeValue,
    [CreateApi.reducerPath]: CreateApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CreateApi.middleware),
});

setupListeners(setupStore.dispatch);
export type AppDispatch = typeof setupStore.dispatch;
export type RootState = ReturnType<typeof setupStore.getState>;
