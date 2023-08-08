import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'
import projetoSlice from "./slices/projetoSlice";
import statusSlice from "./slices/statusSlice";
import softwareSlice from "./slices/softwareSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        projeto: projetoSlice,
        status: statusSlice,
        software: softwareSlice,
    },
});
