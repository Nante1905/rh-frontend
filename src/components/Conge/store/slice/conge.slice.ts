/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit"
import { TypeConge } from "../../types/Conge"


interface CongeForm {
    motif: string,
    idType: number,
    debut: string,
    debutDemiJournee: boolean,
    fin: string,
    finDemiJournee: boolean
}

export interface CongeState {
    form: CongeForm,
    typeCongeOptions: TypeConge[],
    finRequired: boolean
}

const initialState: CongeState = {
    form: {
        motif: '',
        idType: 0,
        debut: '',
        fin: '',
        debutDemiJournee: false,
        finDemiJournee: false
    },
    typeCongeOptions: [],
    finRequired: true
}

export const congeSlice = createSlice({
    name: 'conge',
    initialState,
    reducers: {
        setMotif: (state, action) => {
            console.log("change motif");

            state.form.motif = action.payload;
        },
        setType: (state, action) => {
            state.typeCongeOptions.map((t) => {
                if (t.id == action.payload) {
                    console.log('t ');
                    console.log(t.jour);

                    if (t.jour != null) {
                        console.log('tsy required satria efa misy jour');
                        state.finRequired = false;
                        state.form.fin = ''
                    } else {
                        state.finRequired = true;
                    }
                }
            })
            state.form.idType = action.payload;
        },
        setDebut: (state, action) => {
            state.form.debut = action.payload;
        },
        setFin: (state, action) => {
            state.form.fin = action.payload;
        },
        toggleDebutDemiJournee: (state) => {
            state.form.debutDemiJournee = !state.form.debutDemiJournee;
        },
        toggleFinDemiJournee: (state) => {
            state.form.finDemiJournee = !state.form.finDemiJournee;
        },
        setTypeCongeOptions: (state, action) => {
            state.typeCongeOptions = action.payload;
        },
    }
})

export const { setMotif, setDebut, setFin, toggleDebutDemiJournee, toggleFinDemiJournee, setTypeCongeOptions, setType } = congeSlice.actions;