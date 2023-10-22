import { configureStore } from "@reduxjs/toolkit";
import { congeSlice } from "./slice/conge.slice";

export const congeFormStore = configureStore({
    reducer: {
        conge: congeSlice.reducer,
    }
});

export type CongeState = ReturnType<typeof congeFormStore.getState>