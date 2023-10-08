/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Answer.scss";
import { Checkbox, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  updateTextAnswer,
  updateValueAnswer,
} from "../../store/qcm-form/qcmSlice";
import AnswerClass from "../../types/AnswerClass";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnswerComponent = (props: any) => {
  const dispatch = useDispatch();
  const numero = props.question;
  const id = props.id;
  const answer: AnswerClass = props.answer;

  return (
    <div className="answer">
      <Checkbox
        onChange={() =>
          dispatch(
            updateValueAnswer({
              questionId: numero,
              id: id,
            })
          )
        }
      />
      {answer == null ? (
        <TextField
          // id="standard-required"
          multiline
          placeholder="Choix"
          type="text"
          variant="standard"
          className="answer__input"
          onChange={(event) => {
            dispatch(
              updateTextAnswer({
                questionId: numero,
                id: id,
                text: event.target.value,
              })
            );
          }}
        />
      ) : (
        <div>
          <p>{answer.contenu}</p>
        </div>
      )}
    </div>
  );
};

export default AnswerComponent;
