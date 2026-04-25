import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const vehicleSlice = createSlice({
    name: "Vehicles",
    initialState: {
        vehicles: []
    },
    reducers: {
        vehicles: (state, action) => {state.vehicles = action.payload}
    }
})

export const {vehicles} = vehicleSlice.actions;
export default vehicleSlice.reducer;
