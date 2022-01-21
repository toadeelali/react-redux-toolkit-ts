import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice';
import {asyncStateAction} from '../custom/actions';
import { pokemonApi } from '../rtkq/endpoint';

const rootReducer = combineReducers({
  counter: counterReducer,
  [asyncStateAction.name]: asyncStateAction.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(pokemonApi.middleware),
    preloadedState,
  })
}

export const store = setupStore(); 
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
