/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import "./CandidatureCard.component.scss";
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  List,
  ListItem,
  Snackbar,
} from "@mui/material";
import { Candidature } from "../../../../types/Candidature";
import { env } from "../../../../env";
import { CANDIDATURE_STATUS } from "../../../../constant/CandidatureStatus";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { GppBad } from "@mui/icons-material";
import { http } from "../../../../interceptors/requestInterceptor";

const CandidatureCard = (props: any) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const candidature: Candidature = props.candidature;
  const status = props.status;
  const [updateStatusState, setUpdateStatusState] = useState<any>({
    open: false,
    message: "",
    disableTestBtn: false,
  });

  const addIcon = (state: boolean) => {
    if (status == CANDIDATURE_STATUS.selection) {
      if (state) {
        return <GppGoodIcon className="icon success" />;
      }
      return <GppBad className="icon danger" />;
    }
    return <></>;
  };

  useEffect(() => {
    if (candidature.status != 0) {
      setUpdateStatusState({ ...updateStatusState, disableTestBtn: true });
    }
  }, []);

  const fairePasserTest = () => {
    http
      .put(`/candidatures/${candidature.id}`, {
        status: 1,
      })
      .then((res: any) => {
        if (res.OK) {
          setUpdateStatusState({
            open: true,
            message: res.data.message,
            disableTestBtn: true,
          });
          // setOpen(true);
          // setMessage(res.data.message);
          // setDisableTestBtn(true);
        } else {
          setUpdateStatusState({
            ...updateStatusState,
            open: true,
            message: res.data.message,
          });
          // setOpen(true);
          // setMessage(res.data.message);
        }
      })
      .catch((err) => {
        setUpdateStatusState({
          ...updateStatusState,
          open: true,
          message: err.data,
        });
        // setOpen(true);
        // setMessage(err.data);
      });
  };

  return (
    <div className="candidature-card">
      <Card>
        <CardHeader
          title={
            <div className="candidature-card-header">
              <h4>{`${candidature.utilisateur.nom} ${candidature.utilisateur.prenom}`}</h4>
              {status == CANDIDATURE_STATUS.selection && (
                <div className="note">{candidature.note}</div>
              )}
            </div>
          }
          subheader={
            <>
              <p>{candidature.utilisateur.genre.nom}</p>
              <p>{candidature.utilisateur.email}</p>
            </>
          }
          className="job-card-header"
        />
        <CardContent>
          <div className="candidature-card-info">
            <div className="candidature-card-item">
              {" "}
              <strong>Diplôme: </strong> {candidature.diplome.diplome.nom} en{" "}
              {candidature.domaine.nom}
            </div>
            <div className="candidature-card-item">
              {" "}
              <strong>Date de dépôt: </strong> {candidature.depot}
            </div>
          </div>
          <div className="candidature-card-actions">
            <Button
              className="btn"
              variant="contained"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Voir moins" : "Voir plus"}
            </Button>
          </div>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <div className="candidature-card-collapse">
              <div className="info-item">
                <h3>Informations personnelles</h3>
                <List>
                  <ListItem>
                    {" "}
                    <strong className="info-item-title">
                      {addIcon(candidature.utilisateur.genre.valide as boolean)}
                      Genre:{" "}
                    </strong>{" "}
                    <span>{candidature.utilisateur.genre.nom}</span>
                  </ListItem>
                  <ListItem>
                    <strong className="info-item-title">Ville: </strong>{" "}
                    <span>{candidature.utilisateur.ville.nom}</span>
                  </ListItem>
                  <ListItem>
                    {" "}
                    <strong className="info-item-title">
                      {" "}
                      Date de naissance:{" "}
                    </strong>{" "}
                    <span>{candidature.utilisateur.naissance}</span>
                  </ListItem>
                  <ListItem>
                    {" "}
                    <strong className="info-item-title">
                      {addIcon(
                        candidature.utilisateur.nationalite.valide as boolean
                      )}
                      Nationalité:{" "}
                    </strong>{" "}
                    <span>
                      {candidature.utilisateur.nationalite.nationalite}
                    </span>
                  </ListItem>
                  <ListItem>
                    {" "}
                    <strong className="info-item-title">
                      {addIcon(candidature.matrimonial.valide as boolean)}
                      Situation matrimonial:{" "}
                    </strong>{" "}
                    <span>{candidature.matrimonial.situation}</span>
                  </ListItem>
                  <ListItem>
                    <strong className="info-item-title">Téléphone: </strong>{" "}
                    <span>{candidature.utilisateur.telephone}</span>
                  </ListItem>
                </List>
              </div>
              <div className="info-item">
                <h3>Cursus</h3>
                <List>
                  <ListItem>
                    <strong className="info-item-title">
                      {" "}
                      {addIcon(
                        candidature.diplome.valide as boolean
                      )} Diplôme:{" "}
                    </strong>{" "}
                    {candidature.diplome.diplome.nom} en{" "}
                    {candidature.domaine.nom}
                  </ListItem>
                  <ListItem>
                    {" "}
                    <strong className="info-item-title">
                      {" "}
                      {addIcon(candidature.experience.valide as boolean)}{" "}
                      Expérience:{" "}
                    </strong>{" "}
                    <span>{candidature.experience.experience?.experience}</span>
                  </ListItem>
                </List>
              </div>
              <div className="info-item">
                <h3>Fichiers</h3>
                <List>
                  <ListItem>
                    <strong>Diplôme</strong>{" "}
                    <a
                      href={`${env.apiUrl}/candidatures/docs/${candidature.fichier.diplome}`}
                      // without="true"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Voir le document
                    </a>
                  </ListItem>
                  <ListItem>
                    <strong>Certificat de travail</strong>{" "}
                    <a
                      target="_blank"
                      onClick={() => {
                        window.open(
                          `${env.apiUrl}/candidatures/docs/${candidature.fichier.certificat}`,
                          "_blank"
                        );
                      }}
                    >
                      {" "}
                      Voir le document{" "}
                    </a>
                  </ListItem>
                </List>
              </div>
              {status == CANDIDATURE_STATUS.selection && (
                <div className="candidature-card-collapse-actions flex">
                  {/* <Button
                    className="div-danger"
                    variant="contained"
                    // onClick={() => setExpanded(!expanded)}
                  >
                    Recaler
                  </Button> */}
                  <Button
                    className="div-success"
                    variant="contained"
                    onClick={() => fairePasserTest()}
                    disabled={updateStatusState.disableTestBtn}
                  >
                    Faire passer le test
                  </Button>
                </div>
              )}
            </div>
          </Collapse>
        </CardContent>
      </Card>
      <Snackbar
        open={updateStatusState.open}
        autoHideDuration={6000}
        onClose={() =>
          setUpdateStatusState({
            ...updateStatusState,
            open: false,
          })
        }
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {updateStatusState.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CandidatureCard;
