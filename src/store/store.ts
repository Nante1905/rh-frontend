import { configureStore } from "@reduxjs/toolkit";
import { qcmSlice } from "./qcm-form/qcmSlice";

export const store = configureStore({
    reducer: {
        qcmReducer: qcmSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;