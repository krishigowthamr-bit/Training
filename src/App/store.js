import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from '../Feautures/Counter/vehicleSlice';

export const store = configureStore({
  reducer: {
    vehicles: vehicleReducer
  }
});