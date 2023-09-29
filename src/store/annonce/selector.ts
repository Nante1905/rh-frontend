import { RootState } from "../store";

export const getFormAnnonceData = (state: RootState) => state.annonceForm;
export const getService = (state: RootState) => state.annonceForm.service;

export const getDiplome = (state: RootState) => state.jobCritere.diplome;
export const getDomaine = (state: RootState) => state.jobCritere.domaine;
export const getMatrimonial = (state: RootState) =>
  state.jobCritere.matrimonial;
export const getExperience = (state: RootState) => state.jobCritere.experience;
export const getNationalite = (state: RootState) =>
  state.jobCritere.nationalite;
export const getGenre = (state: RootState) => state.jobCritere.genre;
