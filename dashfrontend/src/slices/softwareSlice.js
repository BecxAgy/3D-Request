import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import softwareService from "../services/softwareService";

const initialState = {
    softwares: [],
    software: {},
    error: false,
    success: false,
    loading: false,
    
}


//slice get all softwares
export const getAllSoftwares = createAsyncThunk("software/getall", async (_,thunkAPI) => {
    const token = JSON.parse(localStorage.getItem("token"));
    debugger;
    const data = await softwareService.getSoftwares(token);
    return data;
})




export const softwareSlice = createSlice({
    name:"software",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null;
        },
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllSoftwares.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(getAllSoftwares.fulfilled, (state, action) => {
            state.loading = false;
            state.success= true;
            state.error = null;
            state.softwares = action.payload;
        })
        
    }
    
})

export const {resetMessage} = softwareSlice.actions;
export default softwareSlice.reducer;