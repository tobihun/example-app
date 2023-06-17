import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from '../middleware/logger-middleware';
import { apiSlice } from "../services/api";
import userSlice from '../features/user';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      apiSlice.middleware,
      loggerMiddleware,
    ]);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;