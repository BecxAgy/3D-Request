import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import projetoService from "../services/projetoService";

const initialState = {
    projetos: [],
    projeto: {},
    error: false,
    success: false,
    loading: false,
    
}


//slice get all projetos
export const getAllProjetos = createAsyncThunk("projeto/getall", async (_,thunkAPI) => {
    const token = JSON.parse(localStorage.getItem("token"));
    debugger;
    const data = await projetoService.getProjetos(token);
    return data;
})



export const projetoSlice = createSlice({
    name:"projeto",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null;
        },
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllProjetos.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(getAllProjetos.fulfilled, (state, action) => {
            state.loading = false;
            state.success= true;
            state.error = null;
            state.projetos = action.payload;
        })
        
    }
    
})

export const {resetMessage} = projetoSlice.actions;
export default projetoSlice.reducer;