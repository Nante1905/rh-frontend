/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import QuestionComponent from "../../components/question/QuestionComponent";
import { Box, Button } from "@mui/material";
import "./QuestionnairePage.scss";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../store/qcm-form/qcmSlice";
import { Question } from "../../types/QuestionClass";

const QuestionnairePage = () => {
  const dispatch = useDispatch();

  const removeQuestion = (id: number, index: number) => {
    // const index = questionList.findIndex((q) => q.props.numero == id);
    console.log(id);
    console.log(questionList);

    if (index >= 0) {
      console.log("deleting");

      setQuestionList(questionList.splice(index, 1));
    }
  };

  const [questionList, setQuestionList] = useState([
    <QuestionComponent
      key={`q_${1}`}
      numero={1}
      handleDelete={removeQuestion}
    />,
  ]);

  const handleClick = () => {
    setQuestionList(
      questionList.concat(
        <QuestionComponent
          key={`q_${questionList.length + 1}`}
          numero={questionList.length + 1}
          handleDelete={removeQuestion}
        />
      )
    );
    dispatch(addQuestion(new Question(questionList.length + 1)));
  };

  return (
    <Box className="questions_container">
      <h1>Questions pour le test</h1>
      {questionList}
      <a onClick={handleClick}> Ajouter une autre question </a>
      <Button onClick={() => console.log(questionList)}>Voir questions</Button>
    </Box>
  );
};

export default QuestionnairePage;
