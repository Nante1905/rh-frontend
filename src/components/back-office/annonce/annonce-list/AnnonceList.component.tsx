import React, { useEffect, useState } from "react";
import "./AnnonceList.component.scss";
import { JobMinDetails } from "../../../../types/Job";
import "./AnnonceList.component.scss";
import AnnonceCard from "../annonce-card/AnnonceCard.component";
import axios from "axios";
import { env } from "../../../../env";
import { Alert, Snackbar } from "@mui/material";

const AnnonceList = () => {
  const [annonces, setAnnonces] = useState<JobMinDetails[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${env.apiUrl}/job/annonce`)
      .then((res) => {
        console.log(res);
        setAnnonces(res.data);
      })
      .catch(() => {
        setError("Impossible de charger les annonces");
      });
  }, []);
  return (
    <>
      <div className="annonce-list">
        <h1>Liste des annonces</h1>
        <div className="annonce-list_container">
          {annonces.map((e, index) => (
            <AnnonceCard key={index} job={e} />
          ))}
        </div>
      </div>
      {error != null && (
        <Snackbar open={error != null} onClose={() => setError(null)}>
          <Alert
            severity="error"
            sx={{ width: "100%" }}
            onClose={() => setError(null)}
          >
            {error}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default AnnonceList;
