import { createSlice } from "@reduxjs/toolkit";

export interface AnnonceForm {
  jobTitle: string;
  service: number;
  volumeHoraire: number;
  tauxHommeJour: number;
  salaireMin: number;
  salaireMax: number;
}

const initialState: AnnonceForm = {
  jobTitle: "",
  service: 1,
  volumeHoraire: 0,
  tauxHommeJour: 0,
  salaireMin: 0,
  salaireMax: 0,
};

export const AnnonceFormSlice = createSlice({
  name: "annonceForm",
  initialState,
  reducers: {
    setJobTile: (state, action) => {
      state.jobTitle = action.payload;
    },
    setService: (state, action) => {
      state.service = action.payload;
    },
    setVolumeHoraire: (state, action) => {
      state.volumeHoraire = action.payload;
    },
    setTauxHJ: (state, action) => {
      state.tauxHommeJour = action.payload;
    },
    setSalaireMin: (state, action) => {
      state.salaireMin = action.payload;
    },
    setSalaireMax: (state, action) => {
      state.salaireMax = action.payload;
    },
  },
});

export const {
  setJobTile,
  setService,
  setVolumeHoraire,
  setTauxHJ,
  setSalaireMin,
  setSalaireMax,
} = AnnonceFormSlice.actions;
