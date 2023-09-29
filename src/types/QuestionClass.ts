import AnswerClass from "./AnswerClass"

export class Question {
    id: number
    text: string = ''
    coeff: number = 1
    answers: AnswerClass[] = []

    constructor(id: number) {
        this.id = id;
        const answer = new AnswerClass();
        answer.id = 1;
        this.answers = [answer]
    }
}