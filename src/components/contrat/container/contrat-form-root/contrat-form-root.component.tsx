/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { useEffect } from "react";
import ContratForm from "../../components/contrat-form/contrat-form.components";
import "./contrat-form-root.component.scss";
import { http } from "../../../../interceptors/requestInterceptor";
import { useDispatch, useSelector } from "react-redux";
import {
  setAvantages,
  setCategories,
  setTypeContratOptions,
} from "../../store/slice/contrat.slice";
import { ContratState } from "../../store/contrat.store";
const ContratFormRoot = (props: any) => {
  const dispatch = useDispatch();
  const jobTitle = props.job;
  const idJob = props.idJob;
  const typeContrats = useSelector(
    (state: ContratState) => state.contrat.typeContratOptions
  );

  const avantages = useSelector(
    (state: ContratState) => state.contrat.avantages
  );

  const categories = useSelector(
    (state: ContratState) => state.contrat.categories
  );
  useEffect(() => {
    http
      .get("contrats/types")
      .then((res) => {
        if (res.data.OK === true) {
          console.log("OPTIONS CONTRAT");

          console.log(res.data.data);

          dispatch(setTypeContratOptions(res.data.data));
        }
      })
      .catch((err) => console.log(err.data.err));

    http
      .get("/contrats/avantages")
      .then((res) => {
        if (res.data.OK === true) {
          dispatch(setAvantages(res.data.data));
        }
      })
      .catch((err) => console.log(err));

    http
      .get("/contrats/categories")
      .then((res) => {
        dispatch(setCategories(res.data));
      })
      .catch((err) => console.log(err.data));
  }, []);
  return (
    <ContratForm
      typeContrats={typeContrats}
      avantages={avantages}
      categories={categories}
      idJob={idJob}
      job={jobTitle}
    />
  );
};

export default ContratFormRoot;
