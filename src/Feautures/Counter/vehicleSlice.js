import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const vehicleSlice = createSlice({
    name: "Vehicles",
    initialState: {
        vehicles: [],
        packages: []
    },
    reducers: {
        vehicles: (state, action) => {state.vehicles = action.payload},
        taxies: (state, action) => {state.packages = action.payload}
    }
})

export const {vehicles, taxies} = vehicleSlice.actions;
export default vehicleSlice.reducer;
