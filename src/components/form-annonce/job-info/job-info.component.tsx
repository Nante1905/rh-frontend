import {
  Alert,
  Button,
  InputAdornment,
  SelectChangeEvent,
  Snackbar,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import "./job-info.components.scss";
import TypeContratSelect from "./type-contrat-select/type-contrat-select.component";
import { Service, TypeContrat, Ville } from "../types/JobCriteria";
import { useDispatch, useSelector } from "react-redux";
import {
  setJobTile,
  setSalaireMax,
  setSalaireMin,
  setService,
  setVolumeHoraire,
  setNbrePersonne,
  setAgeMin,
  setAgeMax,
  setMission,
  setVilleId,
  setTypeContratId,
} from "../../../store/annonce/annonceSlice";
import {
  getService,
  getTypeContratId,
  getVilleId,
} from "../../../store/annonce/selector";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getCurrentService } from "../../../services/form-annonce/form-annonce.service";
import { ActionCreator } from "@reduxjs/toolkit";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import VilleSelect from "./ville-select/ville-select-component";
import RichText from "./TestRichText/RichTest.component";
import { http } from "../../../interceptors/requestInterceptor";

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

  const services: Service[] = [
    {
      id: 1,
      nom_service: "RH",
    },
    {
      id: 2,
      nom_service: "Compta",
    },
    {
      id: 3,
      nom_service: "Production",
    },
  ];

  //typecontrat
  const [typeContrats, setTypeContrats] = useState<TypeContrat[]>([]);
  useEffect(() => {
    const fetchTypeContrats = async () => {
      try {
        const response = await http.get("/contrats/types");
        setTypeContrats(response.data.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des types de contrat :",
          error
        );
      }
    };

    fetchTypeContrats();
  }, []);

  //ville
  const [ville, setVille] = useState<Ville[]>([]);
  useEffect(() => {
    const fetchVille = async () => {
      try {
        const response = await axios.get("http://localhost:8080/ville");
        setVille(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des types de contrat :",
          error
        );
      }
    };

    fetchVille();
  }, []);

  const selectedValue: number = useSelector(getService);
  const selectedVille: number = useSelector(getVilleId);
  const selectedTypeContrat: number = useSelector(getTypeContratId);

  const handleChangeVille = (event: SelectChangeEvent) => {
    const selectedId = event.target.value; // L'ID est stocké dans event.target.value
    dispatch(setVilleId(selectedId));
  };
  const handleChangeTypeContrat = (event: SelectChangeEvent) => {
    const selectedId = event.target.value; // L'ID est stocké dans event.target.value
    dispatch(setTypeContratId(selectedId));
  };

  //
  const handleRichTextContentChange = (content: string) => {
    dispatch(setMission(content));
  };
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

  const handleSuivant = async (event: FormEvent) => {
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
          <div className="job-info">
            <TypeContratSelect
              option={typeContrats}
              selectLabel="Type de Contrat"
              selectValue={selectedTypeContrat}
              onChange={handleChangeTypeContrat}
              required
            />
          </div>
          <div className="job-info_flex">
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
            <TextField
              variant="outlined"
              label="Nombre de personne"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Pers/job</InputAdornment>
                ),
              }}
              onChange={(event) => handleChangeInput(event, setNbrePersonne)}
              required
            />
          </div>
          <div>
            <RichText onContentChange={handleRichTextContentChange} />
          </div>
          <div className="job-info_age">
            <VilleSelect
              option={ville}
              selectLabel="Ville"
              selectValue={selectedVille}
              onChange={handleChangeVille}
              required
            />
          </div>
          <div className="job-info_flex">
            <TextField
              variant="outlined"
              label="Age min"
              type="number"
              onChange={(event) => handleChangeInput(event, setAgeMin)}
              required
            />
            <TextField
              variant="outlined"
              label="Age max"
              type="number"
              onChange={(event) => handleChangeInput(event, setAgeMax)}
              required
            />
          </div>

          <div className="job-info_flex">
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
