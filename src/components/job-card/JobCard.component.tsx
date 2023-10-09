/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./JobCard.component.scss";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Collapse,
  List,
  ListItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const JobCard = (props: any) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const annonce = props.annonce;
  const frontOffice = props.frontOffice as boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onPostule: (idJob: number) => void = props.onPostule;
  const status = props.status;

  const statusMap = ["En attente", "Test", "Entretien", "Embauche"];

  const navigate = useNavigate();

  const renderStatusComponent = (status: number) => {
    if (status === 1) {
      return (
        <Button
          variant="contained"
          onClick={() => navigate(`/client/job/${annonce.idJob}/qcm`)}
        >
          Passer votre test
        </Button>
      );
    } else if (status === undefined) {
      return <></>;
    } else {
      return (
        <Chip label={statusMap[status]} color="primary" variant="contained" />
      );
    }
  };

  return (
    <Card className="job-card">
      <CardHeader
        title={<h2>{annonce.title}</h2>}
        subheader={<h4>{annonce.jour}</h4>}
        className="job-card-header"
      />
      <CardContent>
        <div className="job-card-info">
          <div className="job-card-item">
            {" "}
            <strong>Service: </strong> {annonce.service.nom_service}
          </div>
          <div className="job-card-item">
            {" "}
            <strong>Salaire: </strong> Entre {annonce.sal_min} Ar et{" "}
            {annonce.sal_max} Ar
          </div>
        </div>
        <div className="job-card-actions">
          <Button variant="contained" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Voir moins" : "Voir plus"}
          </Button>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <div className="job-card-collapse">
            <h3>Critères</h3>
            <List>
              <ListItem>
                {" "}
                <strong>Diplôme: </strong>{" "}
                <span>
                  {annonce.jobDiplome.diplome.nom} en{" "}
                  {annonce.jobDiplome.domaine?.nom}
                </span>
              </ListItem>
              <ListItem>
                {" "}
                <strong>Expérience: </strong>
                <span>{annonce.jobExperience.experience.experience}</span>
              </ListItem>
              <ListItem>
                {" "}
                <strong>Genre: </strong>
                <span>{annonce.jobSexe.genre.nom}</span>
              </ListItem>
              <ListItem>
                {" "}
                <strong>Situation matrimoniale: </strong>
                <span>{annonce.jobMatrimoniale.matrimonial.situation}</span>
              </ListItem>
            </List>
          </div>
          {frontOffice === true ? (
            <div className="apply-btn">
              <Button
                variant="contained"
                onClick={() => onPostule(annonce.idJob)}
              >
                Postuler
              </Button>
            </div>
          ) : (
            <></>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {renderStatusComponent(status)}
          </div>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default JobCard;
