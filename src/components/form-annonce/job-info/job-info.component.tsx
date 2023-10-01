import { Button, InputAdornment, SelectChangeEvent } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./job-info.components.scss";
import ServiceSelect from "./service-select/service-select.component";
import { Service } from "../types/Service";
import { useDispatch, useSelector } from "react-redux";
import {
  setJobTile,
  setSalaireMax,
  setSalaireMin,
  setService,
  setTauxHJ,
  setVolumeHoraire,
} from "../../../store/annonce/annonceSlice";
import { getService } from "../../../store/annonce/selector";
import { ChangeEvent, FormEvent } from "react";
import { ActionCreator } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const JobInfo = () => {
  const navigate = useNavigate();
  const services: Service[] = [
    {
      id: 1,
      name: "RH",
    },
    {
      id: 2,
      name: "Compta",
    },
    {
      id: 3,
      name: "Production",
    },
  ];

  const dispatch = useDispatch();
  const selectedValue: number = useSelector(getService);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    dispatch(setService(event.target.value));
  };

  const handleChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    action: ActionCreator<any>
  ) => {
    dispatch(action(event.target.value));
  };

  const handleSuivant = (event: FormEvent) => {
    event.preventDefault();
    navigate("/critere");
  };

  return (
    <div className="bg__blue main__container">
      <div className="job-info">
        <div className="job-info_title">
          <h1>Expression des besoins</h1>
        </div>
        <form onSubmit={handleSuivant}>
          <div className="job-info_head">
            <TextField
              variant="outlined"
              label="Nom du poste"
              onChange={(event) => handleChangeInput(event, setJobTile)}
            />
            <ServiceSelect
              option={services}
              selectLabel="Service"
              selectValue={selectedValue}
              onChange={handleChangeSelect}
            />
          </div>
          <div className="job-info_hour">
            <TextField
              variant="outlined"
              label="Volume horaire"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Heure</InputAdornment>
                ),
              }}
              onChange={(event) => handleChangeInput(event, setVolumeHoraire)}
            />
            <br />
            <TextField
              variant="outlined"
              label="Taux homme-jour"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Homme/jr</InputAdornment>
                ),
              }}
              onChange={(event) => handleChangeInput(event, setTauxHJ)}
            />
          </div>
          <div className="job-info_salary">
            <TextField
              variant="outlined"
              label="Salaire min"
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Ar</InputAdornment>
                ),
              }}
              onChange={(event) => handleChangeInput(event, setSalaireMin)}
            />
            <TextField
              variant="outlined"
              label="Salaire max"
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Ar</InputAdornment>
                ),
              }}
              onChange={(event) => handleChangeInput(event, setSalaireMax)}
            />
          </div>
          <div className="job-info_next-button">
            <Button type="submit" variant="contained">
              Suivant
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobInfo;
