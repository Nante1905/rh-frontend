import { createSlice } from "@reduxjs/toolkit";
import {
  Avantage,
  Categorie,
  ContratForm,
  TypeContrat,
} from "../../types/contrat.interface";
import _ from "lodash";

export interface ContratState {
  form: ContratForm;
  typeContratOptions: TypeContrat[];
  avantages: Avantage[];
  categories: Categorie[];
}

const initialState: ContratState = {
  form: {
    typeContrat: 1,
    debut: "",
    fin: "",
    salaireBrut: 0,
    poste: 1,
    categorie: 1,
    avantages: [],
  },
  typeContratOptions: [],
  avantages: [],
  categories: [],
};

export const contratSlice = createSlice({
  name: "contrat",
  initialState,
  reducers: {
    setTypeContrat: (state, action) => {
      state.form.typeContrat = action.payload;
    },
    setDebut: (state, action) => {
      state.form.debut = action.payload;
    },
    setFin: (state, action) => {
      state.form.fin = action.payload;
    },
    setSalaireBrut: (state, action) => {
      state.form.salaireBrut = action.payload;
    },
    setPoste: (state, action) => {
      state.form.poste = action.payload;
    },
    setCategorie: (state, action) => {
      state.form.categorie = action.payload;
    },
    toogleAvantages: (state, action) => {
      const toogle = _.findIndex(state.form.avantages, { id: action.payload });
      if (toogle === -1) {
        state.form.avantages.push({
          id: action.payload,
          nom: "",
        });
      } else {
        _.remove(
          state.form.avantages,
          (value, index) => value?.id === action.payload
        );
      }
    },
    setTypeContratOptions: (state, action) => {
      state.typeContratOptions = action.payload;
    },
    setAvantages: (state, action) => {
      state.avantages = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {
  setTypeContrat,
  setDebut,
  setFin,
  setSalaireBrut,
  setPoste,
  setCategorie,
  toogleAvantages,
  setTypeContratOptions,
  setAvantages,
  setCategories,
} = contratSlice.actions;
