import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    location: "",
    VehicleType: "",
    amenities: {
        AC: false,
        kitchen: false,
        TV: false,
        bathroom: false,
        microwave: false,
        engine: false,
            
    }
};
const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setLocationFilter(state, action) {
            state.location = action.payload;
        },
        setVehicleTypeFilter(state, action) {
            state.VehicleType = action.payload;
        },
        toggleAmenityFilter(state, action) {
            const amenity = action.payload;
            state.amenities[amenity] = !state.amenities[amenity];
        },
        resetFilters() {
            return initialState;
        },
    }
});
export default filtersSlice.reducer;

export const { setLocationFilter, setTypeFilter, toggleAmenityFilter, resetFilters } = filtersSlice.actions;