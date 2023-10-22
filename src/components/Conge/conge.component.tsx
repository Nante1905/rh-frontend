import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setDemandeId,
    setEmployeId,
    setDebut,
    setDebut_demi_journee,
    setFin,
    setFin_demi_journee,
    setMotif,
    setTypeId,
    setStatus,
}from "../../../src/store/annonce/congeSlice";
import { http } from "../../interceptors/requestInterceptor";
import TypeCongeSelect from "../form-annonce/job-requirement/type-conge-select/type-conge-select.component";
import { TypeConge } from "../form-annonce/types/JobCriteria";
import { getTypeId} from "../../store/annonce/selector";
import { Button, FormControlLabel, Radio, SelectChangeEvent, TextField } from "@mui/material";
import { ActionCreator } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './conge.component.scss';

function DemandeConge () {

  const navigate = useNavigate();
    const selectedTypeConge: number = useSelector(getTypeId);
    const dispatch = useDispatch();
    
    const [TypeConge, setTypeConge] = useState<TypeConge[]>([]);
    useEffect(() => {
    const fetchTypeConge = async () => {
      try {
        const response = await http.get("/conges/types");
        setTypeConge(response.data.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des types de conge :",
          error
        );
      }
    };

    fetchTypeConge();
  }, []);

  const handleChangeTypeConge = (event: SelectChangeEvent) => {
    const selectedId = event.target.value; // L'ID est stocké dans event.target.value
    dispatch(setTypeId(selectedId));
  };

  const [radioValue, setRadioValue] = useState("debut_demi_journee");

  const handleChangeRadio = (event, fieldName) => {
    const isChecked = event.target.checked;
    if (fieldName === "debut_demi_journee") {
      dispatch(setDebut_demi_journee(isChecked));
      dispatch(setFin_demi_journee(!isChecked)); 
      setRadioValue("debut_demi_journee"); 
    } else if (fieldName === "fin_demi_journee") {
      dispatch(setFin_demi_journee(isChecked));
      dispatch(setDebut_demi_journee(!isChecked)); 
      setRadioValue("fin_demi_journee"); 
    }
  };
  
  const handleChangeInput = (
    event: ChangeEvent<any>,
    action: ActionCreator<any>
  ) => {
    event.preventDefault();
    dispatch(action(event.target.value));
  };

  const [authenticatedEmploye, setAuthenticatedEmploye] = useState(null);
  const [employeId, setIdEmploye] = useState(null);
  useEffect(() => {
    axios
      .get("/getAuthenticatedEmploye") // Utilisez Axios ici
      .then((response) => {
        setAuthenticatedEmploye(response.data);
        setIdEmploye(response.data.id);
        console.log(authenticatedEmploye);
      })
      .catch((error) => {
        
        console.error("Erreur lors de l'appel à la fonction backend : ", error);
      });
  }, []);

  useEffect(() => {
    setEmployeId(employeId);
  }, [employeId]);


  const handleSuivant = (event: any) => {
    event.preventDefault();

  }
  
   return (

        <div className="demande-conge bg__blue">
            <div className="demande-conge_title">
                <h1>Demande des Conges</h1>
            </div>
            <form>
                <div className="demande-conge_typeConge">
                    <TypeCongeSelect
                    option={TypeConge}
                    selectLabel="Type de Conge"
                    selectValue={selectedTypeConge}
                    onChange={handleChangeTypeConge}
                    required 
                    />
                    <TextField
                        variant="outlined"
                        label="Motif du conge"
                        onChange={(event) => handleChangeInput(event, setMotif)}
                        required
                    />
                </div>
                <div className="demande-conge_date">
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale="en-gb"
                    >
                    <DatePicker
                        label="Debut"
                        onChange={(value: Dayjs | null) =>
                        dispatch(setDebut(value?.format("YYYY-MM-DD")))
                        }
                        format="DD/MM/YYYY"
                    />
                    <DatePicker
                        label="Fin"
                        onChange={(value: Dayjs | null) =>
                        dispatch(setFin(value?.format("YYYY-MM-DD")))
                        }
                        format="DD/MM/YYYY"
                    />
                    </LocalizationProvider>
                </div>
                <div className="demande-conge_form-control">
                    <FormControlLabel
                        control={
                            <Radio
                            name="debut_demi_journee"
                            checked={radioValue === "debut_demi_journee"}
                            onChange={(event) => handleChangeRadio(event, "debut_demi_journee")}
                            />
                        }
                        label="Debut_demi_journee"
                    />
                    <FormControlLabel
                        control={
                            <Radio
                            name="fin_demi_journee"
                            checked={radioValue === "fin_demi_journee"}
                            onChange={(event) => handleChangeRadio(event, "fin_demi_journee")}
                            />
                        }
                        label="Fin_demi_journee"
                    />
                </div>
                <div className="demande-conge_next-button">
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
}

export default DemandeConge;