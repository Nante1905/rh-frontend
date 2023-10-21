import { findMyConges } from "../../services/CongeService";
import { EtatConge } from "../../types/Conge";
import CongeTab from "../conge-tab/Conge-tab.component";
import "./conge-tab-root.component.scss";
import React, { useEffect, useState } from "react";

const CongeTabRoot = () => {
  const [conge, setConge] = useState<EtatConge | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    findMyConges()
      .then((res) => {
        setConge({ etat: res.data.etat, conge: res.data.conge });
      })
      .catch((err) => {
        console.error(err);
        // setError(err.err.m)
        setError("Impossible de charger les données");
      });
  }, []);

  const render = () => {
    if (error) {
      return <p>{error}</p>;
    }
    if (conge != null) {
      return <CongeTab conge={conge} />;
    }
  };

  return (
    <div className="conge_root">
      <h1 className="title">Vos congés</h1>
      {render()}
    </div>
  );
};

export default CongeTabRoot;
