import AnswerClass from "./AnswerClass"

export class Question {
    index: number
    contenu: string = ''
    coeff: number = 1
    reponses: AnswerClass[] = []

    constructor(id: number) {
        this.index = id;
        const answer = new AnswerClass();
        answer.index = 1;
        this.reponses = [answer]
    }
}