import { configureStore } from "@reduxjs/toolkit";
import { AnnonceFormSlice } from "./annonce/annonceSlice";
import { critereSlice } from "./annonce/critereSlice";

export const store = configureStore({
  reducer: {
    annonceForm: AnnonceFormSlice.reducer,
    jobCritere: critereSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
