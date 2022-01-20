import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice';
import {asyncStateAction} from '../custom/actions';

const rootReducer = combineReducers({
  counter: counterReducer,
  [asyncStateAction.name]: asyncStateAction.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
