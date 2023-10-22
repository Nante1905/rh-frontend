
import { createSlice } from "@reduxjs/toolkit";


export interface CongeForm {
    demandeId:number;
    employeId:number;
    debut:Date;
    debut_demi_journee:boolean; 
    fin:Date;
    fin_demi_journee:boolean;
    motif:string;
    typeId:number;
    status:number;
}
const initialState: CongeForm = {
    demandeId: 0,
    employeId: 0,
    debut: new Date(),
    debut_demi_journee: false,
    fin: new Date(),
    fin_demi_journee: false,
    motif: "",
    typeId: 0,
    status: 0,
  };
  
  export const CongeFormSlice = createSlice({
    name: "congeForm",
    initialState,
    reducers: {
        setDemandeId:(state, action) => {
            state.setDemandeId = action.payload;
        },
        setEmployeId: (state, action) => {
            state.setEmployeId = action.payload;
        },
        setDebut: (state, action) => {
            state.setDebut = action.payload;
        },
        setDebut_demi_journee: (state, action) => {
            state.setDebut_demi_journee = action.payload;
        },
        setFin: (state, action) => {
            state.setFin = action.payload;
        },
        setFin_demi_journee: (state, action) => {
            state.setFin_demi_journee = action.payload;
        },
        setMotif: (state, action) => {
            state.setMotif = action.payload;
        },
        setTypeId: (state,action) => {
            state.setTypeId = action.payload;
        },
        setStatus: (state, action) => {
            state.setStatus = action.payload;
        },
    },
  });

export const {
    setDemandeId,
    setEmployeId,
    setDebut,
    setDebut_demi_journee,
    setFin,
    setFin_demi_journee,
    setMotif,
    setTypeId,
    setStatus,
} = CongeFormSlice.actions;