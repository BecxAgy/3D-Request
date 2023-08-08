import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import statusService from "../services/statusService";

const initialState = {
    statuses: [],
    status: {},
    error: false,
    success: false,
    loading: false,
    
}


//slice get all projetos
export const getAllStatus = createAsyncThunk("status/getall", async (_,thunkAPI) => {
    const token = JSON.parse(localStorage.getItem("token"));
    debugger;
    const data = await statusService.getStatus(token);
    return data;
})




export const statusSlice = createSlice({
    name:"status",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null;
        },
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllStatus.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(getAllStatus.fulfilled, (state, action) => {
            state.loading = false;
            state.success= true;
            state.error = null;
            state.statuses = action.payload;
        })
        
    }
    
})

export const {resetMessage} = statusSlice.actions;
export default statusSlice.reducer;
