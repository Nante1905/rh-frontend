import { configureStore } from "@reduxjs/toolkit";
import { contratSlice } from "./slice/contrat.slice";

export const contratStore = configureStore({
  reducer: {
    contrat: contratSlice.reducer,
  },
});

export type ContratState = ReturnType<typeof contratStore.getState>;
// export type AppDispatch = typeof store.dispatch;
