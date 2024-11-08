import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCampers = createAsyncThunk("campers/fetchCampers",
    async (_, { getState, rejectWithValue }) => {
        try {

            const state = getState();
            const filters = state.filters;

            const query = new URLSearchParams(filters).toString();
            const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${query}`);
            console.log("Fetched campers data:", response.data);
            return response.data;
    
        } catch (error) {
            console.error("Error fetching campers:", error);
            return rejectWithValue(error.message);
        }

    }
);
export const fetchCampersById = createAsyncThunk("campers/fetchCampersById",
    async (id,{rejectWithValue }) => {
        try {
            const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
            return response.data;
    
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);