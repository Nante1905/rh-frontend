import { createSlice } from "@reduxjs/toolkit";
import { Question } from "../../types/QuestionClass";
import AnswerClass from "../../types/AnswerClass";

export interface QcmInterface {
    questions: Question[],
}

const q = new Question(1)
const initialState: QcmInterface = {
    questions: [q],
}

export const qcmSlice = createSlice({
    name: "qcmSlice",
    initialState,
    reducers: {
        addQuestion: (state, action) => {
            state.questions.push(action.payload)
        },
        updateTextQuestion: (state, action) => {
            state.questions.map(q => {
                if (q.index == action.payload.id) {
                    q.contenu = action.payload.text
                }
            })
        },
        updateCoeffQuestion: (state, action) => {
            state.questions.map(q => {
                if (q.index == action.payload.id) {
                    q.coeff = action.payload.coeff
                }
            })
        },
        deleteQuestion: (state, action) => {
            const index = state.questions.findIndex(q => q.index == action.payload.id);
            if (index >= 0) {
                state.questions.splice(index, 1);
            }
        },
        addAnswer: (state, action) => {
            const question = state.questions.filter(q => q.index == action.payload.questionId)[0];
            const answer = new AnswerClass();
            answer.index = action.payload.id;
            question.reponses = question.reponses.concat(answer)
        },
        updateTextAnswer: (state, action) => {
            console.log(action.payload.questionId);

            const question = state.questions.filter(q => q.index == action.payload.questionId)[0];
            const answer = question.reponses.filter(a => a.index == action.payload.id)[0];
            console.log(` id ${action.payload.id} et res ${answer}`);

            answer.contenu = action.payload.text;
        },
        updateValueAnswer: (state, action) => {
            const question = state.questions.filter(q => q.index == action.payload.questionId)[0];
            const answer = question.reponses.filter(a => a.index == action.payload.id)[0];
            answer.valeur = !answer.valeur;
        }

    }
})

export const { addQuestion, updateTextQuestion, updateCoeffQuestion, addAnswer, updateTextAnswer, updateValueAnswer, deleteQuestion } = qcmSlice.actions