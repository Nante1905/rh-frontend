import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import ServiceSelect from "../../../form-annonce/job-info/service-select/service-select.component";
import {
  Avantage,
  Categorie,
  TypeContrat,
} from "../../types/contrat.interface";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import "./contrat-form.components.scss";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
  setDebut,
  setFin,
  setSalaireBrut,
  setTypeContrat,
  toogleAvantages,
} from "../../store/slice/contrat.slice";
import { ContratState } from "../../store/contrat.store";
import { FormEvent } from "react";
import { http } from "../../../../interceptors/requestInterceptor";

const ContratForm = (props) => {
  const poste: string = props?.poste;
  const idUtilisateur: number = props.idUtilisateur;
  const contratOpts: TypeContrat[] = props.typeContrats;
  const avantages: Avantage[] = props.avantages;
  const categories: Categorie[] = props.categories;
  const idJob = props.idJob;
  const job = props.job;

  const dispatch = useDispatch();
  const salaireBrut = useSelector(
    (state: ContratState) => state.contrat.form.salaireBrut
  );

  const contratStore = useStore();

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let form: any = (contratStore.getState() as ContratState).contrat.form;
    form = {
      ...form,
      job: {
        idJob: idJob,
      },
      categorie: {
        id: form.categorie,
      },
      utilisateur: {
        id: idUtilisateur,
      },
      type: {
        id: form.typeContrat,
      },
    };
    console.log(form);

    http
      .post("/contrats", form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contrat-form">
      <div className="contrat-form_container">
        <div className="head">
          <h1>Contrat de travail {job} </h1>
        </div>
        <div className="form">
          <form action="" onSubmit={(event) => onSubmitForm(event)}>
            <div className="form_type-contrat">
              <div className="type">
                <ServiceSelect
                  selectLabel="Type de contrat"
                  option={contratOpts}
                  onChange={(event) =>
                    dispatch(setTypeContrat(event.target.value as number))
                  }
                  required={false}
                />
              </div>
              <h3>Informations</h3>
              <div className="contrat-date">
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
            </div>
            <div className="form_job-info">
              <TextField
                label="Salaire brut"
                type="text"
                onChange={(event) =>
                  dispatch(
                    setSalaireBrut(
                      Number(event.target.value.replace(/\s/g, ""))
                    )
                  )
                }
                value={salaireBrut.toLocaleString()}
              />
              {/* <TextField label="Poste" value={poste} disabled /> */}
              <ServiceSelect
                selectLabel="Categorie"
                option={categories}
                required={false}
              />
            </div>
            <div className="form_avantages">
              <h3>Avantages</h3>
              {avantages?.map((avantage: Avantage, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox />}
                  label={avantage.nom}
                  value={avantage.id}
                  onChange={(event) =>
                    dispatch(toogleAvantages(Number(event.target.value)))
                  }
                />
              ))}
            </div>
            <div className="contrat-form_action">
              <Button variant="contained" type="submit">
                Embaucher
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContratForm;
