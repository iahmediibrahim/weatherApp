import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {apiService} from '../redux/apiService';

// import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  [apiService.reducerPath]: apiService.reducer,
  // counter: counterReducer,
  // Add more reducers here
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiService.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
