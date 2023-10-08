import React, { useEffect, useState } from "react";
import "./AnnonceList.component.scss";
import { JobMinDetails } from "../../../../types/Job";
import "./AnnonceList.component.scss";
import AnnonceCard from "../annonce-card/AnnonceCard.component";
import { env } from "../../../../env";
import { Alert, Button, Snackbar } from "@mui/material";
import { http } from "../../../../interceptors/requestInterceptor";
import { useNavigate } from "react-router-dom";

const AnnonceList = () => {
  const [annonces, setAnnonces] = useState<JobMinDetails[]>([]);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    http
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
        <div className="annonce-list_header">
          <h1>Liste des annonces</h1>
          <Button
            className="annonce-add-btn"
            variant="contained"
            onClick={() => navigate("/job/create")}
          >
            Creer une annonce
          </Button>
        </div>
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
