import { configureStore } from '@reduxjs/toolkit';
import datafromAPi from './data/dataSlice';

const store = configureStore({
  reducer: {
    data: datafromAPi,
  },
});

export default store;
