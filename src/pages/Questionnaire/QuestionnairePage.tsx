/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import QuestionComponent from "../../components/question/QuestionComponent";
import { Box, Button } from "@mui/material";
import "./QuestionnairePage.scss";
import { useDispatch, useStore } from "react-redux";
import { addQuestion } from "../../store/qcm-form/qcmSlice";
import { Question } from "../../types/QuestionClass";
import { RootState } from "../../store/store";
import { buildFormAnnonceData } from "../../helpers/JobHelpers";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QuestionnairePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const store = useStore();

  const handleValider = () => {
    const jobInfo = (store.getState() as RootState).annonceForm;
    const jobCritere = (store.getState() as RootState).jobCritere;
    const jobQcm = (store.getState() as RootState).qcmReducer;

    axios
      .post(
        "http://localhost:8080/test/save",
        buildFormAnnonceData(jobInfo, jobCritere, jobQcm),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res.data));

    // console.log(JSON.stringify(buildFormAnnonceData(jobInfo, jobCritere)));
  };

  return (
    <Box className="questions_container">
      <h1>Questions pour le test</h1>
      {questionList}
      <a onClick={handleClick}> Ajouter une autre question </a>
      <div className="questions_container__btn">
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/critere");
          }}
        >
          Retour
        </Button>
        <Button variant="contained" onClick={handleValider}>
          Valider
        </Button>
      </div>
    </Box>
  );
};

export default QuestionnairePage;
