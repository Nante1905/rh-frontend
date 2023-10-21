import { createSlice } from "@reduxjs/toolkit";
import { DemandeConge } from "../types/demande-conge.interface";

export interface CongeState {
  demandes: DemandeConge[];
}

const initialState: CongeState = {
  demandes: [],
};

export const congeSlice = createSlice({
  name: "conge",
  initialState,
  reducers: {
    setDemandes: (state, action) => {
      state.demandes = action.payload;
    },
  },
});

export const { setDemandes } = congeSlice.actions;
