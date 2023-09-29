import { configureStore } from "@reduxjs/toolkit";
import { AnnonceFormSlice } from "./annonce/annonceSlice";
import { critereSlice } from "./annonce/critereSlice";
import { qcmSlice } from "./qcm-form/qcmSlice";

export const store = configureStore({
  reducer: {
    annonceForm: AnnonceFormSlice.reducer,
    jobCritere: critereSlice.reducer,
    qcmReducer: qcmSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
