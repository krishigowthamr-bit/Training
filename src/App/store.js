import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer, { vehicles } from '../Feautures/Counter/vehicleSlice';

export const store = configureStore({
  reducer: {
    vehicles: vehicleReducer
  }
});