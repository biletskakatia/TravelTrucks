import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersById } from "./operations";

const campersSlice = createSlice({
    name: "campers",
    initialState: {
        items: [],
        camperDetails: null,
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                console.log("Дані з бекенду:", action.payload);
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchCampers.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(fetchCampersById.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchCampersById.fulfilled, (state, action) => {
                state.camperDetails = action.payload;
                state.loading = false;
            })
            .addCase(fetchCampersById.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
}) 
export default campersSlice.reducer;
export const { resetItems } = campersSlice.actions;