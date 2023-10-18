import { createSlice } from "@reduxjs/toolkit";


export interface AnnonceForm {
  jobTitle: string;
  service: number;
  volumeHoraire: number;
  nbrPersonne:number;
  ageMin:number;
  ageMax:number;
  mission:string;
  salaireMin: number;
  salaireMax: number;
  typeContratId:number;
  villeId:number;
}

const initialState: AnnonceForm = {
  jobTitle: "",
  service: 1,
  volumeHoraire: 0,
  nbrPersonne:0,
  ageMin:0,
  ageMax:0,
  mission:"",
  salaireMin: 0,
  salaireMax: 0,
  typeContratId:1,
  villeId:1,
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
    setNbrePersonne: (state, action) => {
      state.nbrPersonne = action.payload;
    },
    setAgeMin: (state, action) => {
      state.ageMin = action.payload;
    },
    setAgeMax: (state, action) => {
      state.ageMax = action.payload;
      console.log(state.ageMax)
    },
    setMission: (state, action) => {
      state.mission = action.payload;
    },
    setSalaireMin: (state, action) => {
      state.salaireMin = action.payload;
    },
    setSalaireMax: (state, action) => {
      state.salaireMax = action.payload;
    },
    setTypeContratId: (state , action) => {
      state.typeContratId = action.payload;
    },
    setVilleId: (state, action) => {
      state.villeId = action.payload;
    },
  },
});

export const {
  setJobTile,
  setService,
  setVolumeHoraire,
  setNbrePersonne,
  setAgeMin,
  setAgeMax,
  setMission,
  setSalaireMin,
  setSalaireMax,
  setTypeContratId,
  setVilleId,
} = AnnonceFormSlice.actions;
