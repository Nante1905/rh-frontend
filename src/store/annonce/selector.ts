import { RootState } from "../store";

export const getFormAnnonceData = (state: RootState) => state.annonceForm;
export const getService = (state: RootState) => state.annonceForm.service;

export const getVilleId = (state: RootState) => state.annonceForm.villeId;
export const getTypeContratId = (state: RootState) => state.annonceForm.typeContratId;

export const getDiplome = (state: RootState) => state.jobCritere.diplome;
export const getDomaine = (state: RootState) => state.jobCritere.domaine;
export const getMatrimonial = (state: RootState) =>
  state.jobCritere.matrimonial;
export const getExperience = (state: RootState) => state.jobCritere.experience;
export const getNationalite = (state: RootState) =>
  state.jobCritere.nationalite;
export const getGenre = (state: RootState) => state.jobCritere.genre;

export const getJobInfo = (state: RootState) => state.annonceForm;
export const getJobCritere = (state: RootState) => state.jobCritere;
export const getQuestionnaire = (state: RootState) => state.qcmReducer;
