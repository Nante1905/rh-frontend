import { configureStore } from "@reduxjs/toolkit";
import { congeSlice } from "./conge.reducer";

export const congeStore = configureStore({
  reducer: {
    congeReducer: congeSlice.reducer,
  },
});

export type CongerStore = ReturnType<typeof congeStore.getState>;
