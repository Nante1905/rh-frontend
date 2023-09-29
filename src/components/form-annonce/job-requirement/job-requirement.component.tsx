import { ChangeEvent, useState } from "react";
import ServiceSelect from "../job-info/service-select/service-select.component";
import "./job-requirement.component.scss";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { ActionCreator } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  setDiplome,
  setDiplomeCoef,
  setDomaine,
  setExperience,
  setExperienceCoef,
  setGenre,
  setGenreCoef,
  setMatrimonial,
  setMatrimonialCoef,
  setNationalite,
  setNationaliteCoef,
} from "../../../store/annonce/critereSlice";
import {
  getDiplome,
  getDomaine,
  getExperience,
  getMatrimonial,
  getNationalite,
} from "../../../store/annonce/selector";
import { useNavigate } from "react-router-dom";

const JobRequirement = () => {
  const navigate = useNavigate();
  const options = [
    {
      id: 1,
      name: "BACC",
    },
    {
      id: 2,
      name: "LICENSE",
    },
    {
      id: 3,
      name: "MASTER",
    },
    {
      id: 4,
      name: "PhD",
    },
  ];
  const domains = [
    {
      id: 1,
      name: "IT/Maths",
    },
    {
      id: 2,
      name: "Compta/Finance/Gestion",
    },
  ];
  const exps = [
    {
      id: 1,
      name: "1-3 ans",
    },
    {
      id: 2,
      name: "4-5 ans",
    },
  ];

  const [radioValue, setRadioValue] = useState("Homme");
  const dispatch = useDispatch();

  // const select = useSelector();

  const handleChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
    handleChangeInput(event, setGenre);
  };

  const handleChangeInput = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event: ChangeEvent<any>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    action: ActionCreator<any>
  ) => {
    event.preventDefault();
    dispatch(action(event.target.value));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSuivant = (event: any) => {
    event.preventDefault();
    navigate("/questionnaire");
  };

  return (
    <div className="job-req">
      <div className="job-req_title">
        <h1>Criteres de Recrutement</h1>
      </div>
      <form>
        <div className="job-req_form-control">
          <ServiceSelect
            option={options}
            selectLabel="Diplome"
            selectValue={useSelector(getDiplome)}
            onChange={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleChangeInput(event, setDiplome)}
          />
          <ServiceSelect
            option={domains}
            selectLabel="Domaine"
            selectValue={useSelector(getDomaine)}
            onChange={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleChangeInput(event, setDomaine)}
          />
          <TextField
            type="number"
            label="Coef"
            onChange={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleChangeInput(event, setDiplomeCoef)}
          />
        </div>
        {/* <div className="job-req_form-control"></div> */}
        <div className="job-req_form-control">
          <ServiceSelect
            option={exps}
            selectLabel="Experience"
            selectValue={useSelector(getExperience)}
            onChange={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleChangeInput(event, setExperience)}
          />
          <TextField
            type="number"
            label="Coef"
            onChange={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleChangeInput(event, setExperienceCoef)}
          />
        </div>
        <div className="job-req_form-control">
          <ServiceSelect
            option={exps}
            selectLabel="Situation matrimonial"
            selectValue={useSelector(getMatrimonial)}
            onChange={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleChangeInput(event, setMatrimonial)}
          />
          <TextField
            type="number"
            label="Coef"
            onChange={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleChangeInput(event, setMatrimonialCoef)}
          />
        </div>
        <div className="job-req_form-control">
          <ServiceSelect
            option={exps}
            selectLabel="Nationalite"
            selectValue={useSelector(getNationalite)}
            onChange={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleChangeInput(event, setNationalite)}
          />
          <TextField
            type="number"
            label="Coef"
            onChange={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleChangeInput(event, setNationaliteCoef)}
          />
        </div>
        <div className="job-req_form-control">
          <label htmlFor="genre">Genre : </label>
          <RadioGroup
            value={radioValue}
            onChange={handleChangeRadio}
            className="radio-group"
          >
            <FormControlLabel value="0" control={<Radio />} label="Femme" />
            <FormControlLabel value="1" control={<Radio />} label="Homme" />
          </RadioGroup>
          <TextField
            label="Coef"
            type="number"
            onChange={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => handleChangeInput(event, setGenreCoef)}
          />
        </div>
        <div className="job-req_next-button">
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/");
            }}
          >
            Retour
          </Button>
          <Button onClick={handleSuivant} type="submit" variant="contained">
            Suivant
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JobRequirement;
