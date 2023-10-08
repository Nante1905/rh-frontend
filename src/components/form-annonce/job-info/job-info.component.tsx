import { Alert, Button, InputAdornment, Snackbar } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./job-info.components.scss";
import { useDispatch } from "react-redux";
import {
  setJobTile,
  setSalaireMax,
  setSalaireMin,
  setService,
  setTauxHJ,
  setVolumeHoraire,
} from "../../../store/annonce/annonceSlice";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ActionCreator } from "@reduxjs/toolkit";
import { useLocation, useNavigate } from "react-router-dom";
import { getCurrentService } from "../../../services/form-annonce/form-annonce.service";
import { Service } from "../types/JobCriteria";

const JobInfo = () => {
  const navigate = useNavigate();
  const location = useLocation(); //get param from route
  const [successInserted, setSuccessInserted] = useState<boolean>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [currentService, setCurrentService] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.state == null) {
      setSuccessInserted(false);
    } else {
      if (location.state.success) {
        setSuccessInserted(true);
      }
    }

    getCurrentService(
      (res: Service | string) => {
        res = res as Service;
        dispatch(setService(res?.id));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setCurrentService(res.nom_service as string);
      },
      (err: Service | string) => {
        console.log(err as string);
      }
    );
  }, []);

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
              required
            />
            {/* <ServiceSelect
              option={currentService}
              selectLabel="Service"
              selectValue={selectedValue}
              onChange={handleChangeSelect}
              required
            /> */}
            <TextField
              variant="outlined"
              label="Service"
              value={currentService}
              onChange={(e) => setCurrentService(e.target.value)}
              disabled
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
              required
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
              required
            />
          </div>
          <div className="job-info_salary">
            <TextField
              variant="outlined"
              label="Salaire min"
              type="number"
              onChange={(event) => handleChangeInput(event, setSalaireMin)}
              required
            />
            <TextField
              variant="outlined"
              label="Salaire max"
              type="number"
              onChange={(event) => handleChangeInput(event, setSalaireMax)}
              required
            />
          </div>
          <div className="job-info_next-button">
            <Button type="submit" variant="contained">
              Suivant
            </Button>
          </div>
        </form>
      </div>
      {successInserted && (
        <Snackbar
          open={successInserted}
          onClose={() => setSuccessInserted(false)}
        >
          <Alert
            severity="success"
            sx={{ width: "100%" }}
            onClose={() => setSuccessInserted(false)}
          >
            Annonce créée avec succès
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default JobInfo;
