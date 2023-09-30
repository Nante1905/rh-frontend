import { createSlice } from "@reduxjs/toolkit";

export interface JobCritere {
  diplome: number;
  diplomeCoef: number;
  domaine: number;
  experience: number;
  experienceCoef: number;
  matrimonial: number;
  matrimonialCoef: number;
  nationalite: number;
  nationaliteCoef: number;
  genre: number;
  genreCoef: number;
}

const initialState: JobCritere = {
  diplome: 1,
  diplomeCoef: 1,
  domaine: 1,
  experience: 1,
  experienceCoef: 1,
  matrimonial: 1,
  matrimonialCoef: 1,
  nationalite: 1,
  nationaliteCoef: 1,
  genre: 0,
  genreCoef: 1,
};

export const critereSlice = createSlice({
  name: "JobCritere",
  initialState,
  reducers: {
    setDiplome: (state, action) => {
      state.diplome = action.payload;
    },
    setDiplomeCoef: (state, action) => {
      state.diplomeCoef = action.payload;
    },
    setDomaine: (state, action) => {
      state.domaine = action.payload;
    },
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
    setExperienceCoef: (state, action) => {
      state.experienceCoef = action.payload;
    },
    setMatrimonial: (state, action) => {
      state.matrimonial = action.payload;
    },
    setMatrimonialCoef: (state, action) => {
      state.matrimonialCoef = action.payload;
    },
    setNationalite: (state, action) => {
      state.nationalite = action.payload;
    },
    setNationaliteCoef: (state, action) => {
      state.nationaliteCoef = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setGenreCoef: (state, action) => {
      state.genreCoef = action.payload;
    },
  },
});

export const {
  setDiplome,
  setDiplomeCoef,
  setDomaine,
  setExperience,
  setExperienceCoef,
  setMatrimonial,
  setMatrimonialCoef,
  setNationalite,
  setNationaliteCoef,
  setGenre,
  setGenreCoef,
} = critereSlice.actions;
