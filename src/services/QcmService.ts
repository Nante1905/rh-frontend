/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { http } from "../interceptors/requestInterceptor";
import { Test, TestReponse } from "../types/Qcm";
import { Question } from "../types/QuestionClass";
// import { Questionnaire } from "../types/QuestionClass";

export const getQuestionnaire = (idJob: string | undefined): any => {
    if (idJob == undefined) {
        throw new Error("You must provide an idJob");
    }
    return http.get(`/job/${idJob}/questionnaires`);
}

export const extractTestReponse = (q: Question) => {
    const result: TestReponse[] = [];
    q.reponses.map((r) => {
        result.push({
            idQuestion: q.index,
            idReponse: r.index,
            valeur: r.valeur
        })
    })
    return result;
}

export const sendTest = (data: Test) => {
    return http.post('/job/tests', data);
}