// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/reducer/index';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
