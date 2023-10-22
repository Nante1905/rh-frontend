import { QcmInterface } from "../store/qcm-form/qcmSlice";
import { Question } from "./QuestionClass";

export class Qcm implements QcmInterface {
    questions!: Question[];
}

export interface TestReponse {
    idQuestion: number,
    idReponse: number,
    valeur: boolean
}

export interface Test {
    idCandidature: number,
    reponses: TestReponse[]
}