
import { configureStore } from '@reduxjs/toolkit';
import availabilityReducer from './availabilitySlice';

const store = configureStore({
  reducer: {
    availability: availabilityReducer,
  },
});

export default store;
