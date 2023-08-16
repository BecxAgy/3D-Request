import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
    user: {},
    error: false,
    success: false,
    loading: false,
    message: null
};

export const getUser = createAsyncThunk(
    "user/get",
    async(id, thunkAPI) => {
        const token = JSON.parse(localStorage.getItem("token"));
        //chamar o service get passando o user e o token
        debugger
        const data = await userService.getUser(id, token);
        return data;
    }
)

export const userSlice = createSlice({

    name: "user",
    initialState, 
    reducers: {
        resetMessage: (state) => {
            state.message = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUser.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success= true;
            state.error = null;
            state.user = action.payload;
        })
    }
});

export const {resetMessage} = userSlice.actions;
export default userSlice.reducer;