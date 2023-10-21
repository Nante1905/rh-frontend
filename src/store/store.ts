import { configureStore } from "@reduxjs/toolkit";
import { AnnonceFormSlice } from "./annonce/annonceSlice";
import { CongeFormSlice } from "./annonce/congeSlice";
import { critereSlice } from "./annonce/critereSlice";
import { qcmSlice } from "./qcm-form/qcmSlice";

export const store = configureStore({
  reducer: {
    annonceForm: AnnonceFormSlice.reducer,
    jobCritere: critereSlice.reducer,
    qcmReducer: qcmSlice.reducer,
    congeForm: CongeFormSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
