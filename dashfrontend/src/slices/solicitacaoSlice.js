import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import solicitacaoService from "../services/solicitacaoService";

const initialState = {
    solicitacoes: [],
    solicitacao: {},
    error: false,
    success: false,
    loading: false,
    message: null
    
};


//slice get 
export const getSolicitacoes = createAsyncThunk("solicitacao/get", async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    debugger;

    
        const data = await solicitacaoService.getSolicitacoes(token);
        return data;
    
  
    
});

//slice get ALL
export const getAllSolicitacoes = createAsyncThunk("solicitacao/getall", async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    debugger;

    
        const data = await solicitacaoService.getAllSolicitacoes(token);
        return data;
    
  
    
});

//slice getbyid
export const getSolicitacaoById = createAsyncThunk ("solicitacao/getbyid", async (id, thunkAPI ) => {
    const token = JSON.parse(localStorage.getItem("token")); 

    const data = await solicitacaoService.getSolicitacaoById(id, token);
    return data;
});

export const createSolicitacao = createAsyncThunk("solicitacao/create", async (solicitacao, thunkAPI) => {
    const token = JSON.parse(localStorage.getItem("token"));

    const data = await solicitacaoService.createSolicitacao(solicitacao, token);

    if(data.error) {
        return thunkAPI.rejectWithValue();
    }

    return data;
});


export const deleteSolicitacao = createAsyncThunk("solicitacao/delete", async(id, thunkAPI) => {
    const token = JSON.parse(localStorage.getItem("token"));
    debugger;
    const data = await solicitacaoService.deleteSolicitacao(id, token);

    if(data.erro){
        return thunkAPI.rejectWithValue(data.erro);
    }
      return data;
});


export const updateSolicitacao = createAsyncThunk("solicitacao/update", async (data, thunkAPI) => {
    const { id, solicitacao } = data; // Destructure os valores do objeto data
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(solicitacao);

    const response = await solicitacaoService.updateSolictacao(id, solicitacao, token);

    if (response.error) {
        return thunkAPI.rejectWithValue(response.error);
    }
    window.location.href = '/';

    return response;
});


export const solicitacaoSlice = createSlice({
    name: "solicitacao",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null;
        },
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getSolicitacoes.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(getSolicitacoes.fulfilled, (state, action) => {
            state.loading = false;
            state.success= true;
            state.error = null;
            state.solicitacoes = action.payload;
        })
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
        .addCase(createSolicitacao.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(createSolicitacao.fulfilled, (state, action) => {
            state.loading = false;
            state.success= true;
            state.error = null;
            state.solicitacao = action.payload;
            //adicionando no primeiro lugar do array
            state.solicitacoes.unshift(state.solicitacao);
            state.message = "Solicitação criada com sucesso!"
        })
        .addCase(createSolicitacao.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.solicitacao = {};
        })
        .addCase(deleteSolicitacao.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(deleteSolicitacao.fulfilled, (state, action) => {
            state.loading = false;
            state.success= true;
            state.error = null;
            state.solicitacoes = state.solicitacoes.filter((solicitacao) => {
                //console.log(action.payload);
                return solicitacao.id !== action.payload.id
            })
            state.message = "Solicitação deletada com sucesso!"
        })
        .addCase(deleteSolicitacao.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.solicitacao = {};
        })
        .addCase(updateSolicitacao.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(updateSolicitacao.fulfilled, (state, action) => {
            state.loading = false;
            state.success= true;
            state.error = null;
            state.solicitacoes = state.solicitacoes.map((sol) => {

                //tem que testar

                if(sol.id === action.payload.id){
                    return sol = action.payload
                };
                return sol;
            })
            state.message = "Solicitação editada com sucesso!"
        })
        .addCase(updateSolicitacao.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.solicitacao = {};
        })
        .addCase(getSolicitacaoById.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(getSolicitacaoById.fulfilled, (state, action) => {
            state.loading = false;
            state.success= true;
            state.error = null;
            state.solicitacao = action.payload;
        })
    }
    
})

export const {resetMessage} = solicitacaoSlice.actions;
export default solicitacaoSlice.reducer;