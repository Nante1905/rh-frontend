/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./Question.scss";
import { TextField } from "@mui/material";
import Answer from "../answer/AnswerComponent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch } from "react-redux";
import {
  addAnswer,
  updateCoeffQuestion,
  updateTextQuestion,
} from "../../store/qcm-form/qcmSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const QuestionComponent = (props: any) => {
  const numero = props.numero;
  const dispatch = useDispatch();

  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-explicit-any

  const [answersList, setAnswerList] = useState([
    <Answer key={"a_0"} id={1} question={numero} />,
  ]);

  const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTextQuestion({ id: numero, text: event.target.value }));
  };

  const handleCoeffChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCoeffQuestion({ id: numero, coeff: event.target.value }));
  };

  const handleAddAnswer = () => {
    setAnswerList(
      answersList.concat(
        <Answer
          key={`a_${answersList.length}`}
          id={answersList.length + 1}
          question={numero}
        />
      )
    );
    dispatch(addAnswer({ questionId: numero, id: answersList.length + 1 }));
  };

  // const handleDeleteQuestion = (index:) => {
  //   dispatch(deleteQuestion({ id: numero }));
  //   props.handleDelete(numero);
  //   console.log(numero);
  // };

  return (
    <Card className="card__container">
      <CardContent className="card">
        <div className="questions">
          <div className="circle">Q {numero}</div>
          <TextField
            label={`Question n° ${numero}`}
            variant="outlined"
            multiline
            className="input__question"
            onChange={handleQuestionChange}
          />
          <TextField
            label="Coefficient"
            variant="outlined"
            type="number"
            defaultValue={1}
            className="input__coeff"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              inputProps: {
                min: 1,
              },
            }}
            onChange={handleCoeffChange}
          />
        </div>
        <div className="answers__container">
          {answersList}
          <p className="answers__add">
            <AddCircleIcon className="icon" onClick={handleAddAnswer} /> Ajouter
            une autre réponse
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionComponent;
