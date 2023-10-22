import { useDispatch, useSelector, useStore } from "react-redux";
import ServiceSelect from "../../../form-annonce/job-info/service-select/service-select.component";
import "./conge-form.component.scss";
import {
  setDebut,
  setFin,
  setMotif,
  setType,
  setTypeCongeOptions,
  toggleDebutDemiJournee,
  toggleFinDemiJournee,
} from "../../store/slice/conge.slice";
import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { CongeState } from "../../store/conge-form.store";
import { FormEvent, useEffect } from "react";
import { findTypeConge } from "../../services/CongeService";

const CongeForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    findTypeConge()
      .then((res) => {
        dispatch(setTypeCongeOptions(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const congeStore = useStore();

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let form: any = (congeStore.getState() as CongeState).conge.form;
    form = {
      ...form,
      type: {
        id: form.type,
      },
    };

    console.log(form);
    // sendDemande(form).then((res) => {
    //     console.log(res.data);
    // }).catch((err) => {
    //     console.error(err);

    // })
  };

  return (
    <div className="conge-form">
      <div className="head">
        <h1>Demande de congé</h1>
      </div>
      <Card className="container">
        <div className="form">
          <form onSubmit={(event) => onSubmitForm(event)}>
            <div className="form-part flex">
              <ServiceSelect
                selectLabel="Type de congé"
                option={useSelector(
                  (state: CongeState) => state.conge.typeCongeOptions
                )}
                onChange={(event) =>
                  dispatch(setType(event.target.value as number))
                }
                required={true}
              />
              <TextField
                label="Motif"
                type="text"
                onChange={(event) => dispatch(setMotif(event.target.value))}
                required={true}
              />
            </div>
            <div className="form-part flex">
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
                <FormControlLabel
                  control={<Checkbox />}
                  label={"Demi journée"}
                  onChange={() => dispatch(toggleDebutDemiJournee())}
                />
              </LocalizationProvider>
            </div>
            <div className="form-part flex">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en-gb"
              >
                <DatePicker
                  label="Fin"
                  onChange={(value: Dayjs | null) =>
                    dispatch(setFin(value?.format("YYYY-MM-DD")))
                  }
                  format="DD/MM/YYYY"
                  disabled={useSelector(
                    (state: CongeState) => !state.conge.finRequired
                  )}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={"Demi journée"}
                  onChange={() => dispatch(toggleFinDemiJournee())}
                />
              </LocalizationProvider>
            </div>
            <div className="form-part actions">
              <Button type="submit" variant="contained">
                Envoyer
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default CongeForm;
