import React, { useEffect, useState } from "react";
import EmployeList from "../components/employe-list/EmployeList.Component";
import Filter from "../components/filter/Filter.component";
import { EmployeTab } from "../types/EmployeTab";
import { findAllEmployes, findEmployesByMission } from "../services/EmpService";
import { CircularProgress } from "@mui/material";
import "./employe-list-root.component.scss";

const EmployeListRoot = () => {
  const [emps, setEmps] = useState<EmployeTab[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [load, setLoad] = useState({ loaded: true, loading: false });

  useEffect(() => {
    findAllEmployes()
      .then((res) => {
        console.log(res.data);
        setEmps(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Impossible de récupérer les données");
      });
  }, []);

  const handleSubmit = (value: string) => {
    setLoad({ loaded: false, loading: true });
    setTimeout(() => {
      findEmployesByMission(value)
        .then((res) => {
          console.log(res.data);
          setEmps(res.data);
          // setLoad({ loaded: true, loading: false });
        })
        .catch((err) => {
          console.error(err);
        });
    }, 2000);
  };

  const displayTable = () => {
    if (load.loaded == false && load.loading == true) {
      return (
        <div className="circular_loading">
          <CircularProgress />
        </div>
      );
    }
    return <EmployeList emps={emps} />;
  };

  return (
    <div className="employe_list_container">
      <h1 className="title">Liste du personnel</h1>
      <Filter handleSubmit={handleSubmit} />
      {error != null ? <p>{error}</p> : displayTable()}
    </div>
  );
};

export default EmployeListRoot;
