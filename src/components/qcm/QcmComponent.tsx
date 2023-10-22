/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import "./QcmComponent.scss";
import { useDispatch } from "react-redux";
import {
  extractTestReponse,
  getQuestionnaire,
  sendTest,
} from "../../services/qcmService";
import { setQcm } from "../../store/qcm-form/qcmSlice";
import { Qcm, Test, TestReponse } from "../../types/Qcm";
import { Button, Card, CardContent } from "@mui/material";
import AnswerComponent from "../answer/AnswerComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RootState, store } from "../../store/store";

const QcmComponent = () => {
  const dispatch = useDispatch();
  const [questionnaire, setQuestionnaire] = useState<Qcm | null>(null);
  const params = useParams();
  const idJob = params.id;
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state.candidature);

  useEffect(() => {
    let questions: Qcm | null = null;
    getQuestionnaire(idJob)
      .then((result: any) => {
        questions = result.data;
        console.log(questions);

        setQuestionnaire(questions);
        dispatch(setQcm({ questions: questions?.questions }));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = () => {
    const qcm: Qcm = (store.getState() as RootState).qcmReducer;
    const reponses: TestReponse[] = [];
    qcm.questions.map((q) => {
      reponses.push(...extractTestReponse(q));
    });

    const data: Test = {
      idCandidature: location.state.candidature,
      reponses,
    };

    console.log(data);

    sendTest(data)
      .then((res) => navigate("/client/candidatures"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg__blue">
      <div className="title">
        <h1>Passez votre test</h1>
      </div>
      <div className="qcm-container">
        {questionnaire?.questions.map((q, i) => (
          <Card className="card__container" key={`q_${i}`}>
            <CardContent className="card">
              <div className="questions qcm">
                <div className="circle">Q {i + 1}</div>
                <div className="input__question">{q.contenu}</div>
                {/* <TextField
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
                /> */}
              </div>
              <div className="answers__container">
                {q.reponses.map((r, j) => (
                  <AnswerComponent
                    key={`r_${j}`}
                    question={q.index}
                    id={r.index}
                    answer={r}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="actions center">
          <Button variant="contained" size="large" onClick={handleSubmit}>
            Valider
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QcmComponent;
