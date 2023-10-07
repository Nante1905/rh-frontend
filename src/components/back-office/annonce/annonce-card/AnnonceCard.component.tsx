/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./AnnonceCard.component.scss";
import { JobMinDetails } from "../../../../types/Job";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const AnnonceCard = (props: any) => {
  const job: JobMinDetails = props.job;
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/admin/annonces/${job.id}/candidatures`);
  };
  return (
    <div className="annonce-card">
      <div className="annonce">
        <div className="annonce_job">
          <div className="annonce_body-column">
            <div className="annonce_body-item-title">
              <h1>{job.title}</h1>
            </div>
            <div className="annonce_body-item">Service: {job.service}</div>
            <div className="annonce_body-item">Date: {job.jour}</div>
            <div className=" annonce_body-item flex">
              <p>Candidatures: {job.candidature}</p>
              <p>Selectionnés: {job.attenteTest}</p>
              <p>Passé le test: {job.passeTest}</p>
            </div>
          </div>
        </div>
        <div className="btn-submit-container">
          <Button variant="contained" onClick={handleButtonClick}>
            Voir plus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnnonceCard;
