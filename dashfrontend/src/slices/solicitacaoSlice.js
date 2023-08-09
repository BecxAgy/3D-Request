import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import solicitacaoService from "../services/solicitacaoService";

const initialState = {
    solicitacoes: [],
    solicitacao: {},
    error: false,
    success: false,
    loading: false,
    
}


//slice get all
export const getAllSolicitacoes = createAsyncThunk("solicitacao/getall", async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    debugger;
    const data = await solicitacaoService.getSolicitacoes(token);
    return data;
})




export const solicitacaoSlice = createSlice({
    name:"solicitacao",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null;
        },
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllSolicitacoes.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(getAllSolicitacoes.fulfilled, (state, action) => {
            state.loading = false;
            state.success= true;
            state.error = null;
            state.solicitacoes = action.payload;
        })
        
    }
    
})

export const {resetMessage} = solicitacaoSlice.actions;
export default solicitacaoSlice.reducer;