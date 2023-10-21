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
  Dialog,
  DialogActions,
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
import ContratFormRoot from "../../../contrat/container/contrat-form-root/contrat-form-root.component";

const CandidatureCard = (props: any) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [openContrat, setOpenContrat] = useState<boolean>(false);
  const jobTitle = props.job;
  const idJob = props.idJob;
  let candidature: Candidature = props.candidature;

  console.log(candidature);

  let noteTest = 0;
  let totalTest = 0;
  const status = props.status;
  if (status == 5) {
    noteTest = candidature?.note;
    totalTest = candidature?.total;
    candidature = candidature?.candidature;
  }
  const [updateStatusState, setUpdateStatusState] = useState<any>({
    open: false,
    message: "",
    disableTestBtn: false,
    disableEntretienBtn: false,
  });

  const addIcon = (state: boolean) => {
    if (status >= CANDIDATURE_STATUS.selection) {
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
    if (candidature.status == 2) {
      setUpdateStatusState({ ...updateStatusState, disableEntretienBtn: true });
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

  const fairePasserEntretien = () => {
    http
      .put(`/candidatures/${candidature.id}`, {
        status: 2,
      })
      .then((res: any) => {
        if (res.OK) {
          setUpdateStatusState({
            open: true,
            message: res.data.message,
            disableEntretienBtn: true,
          });
        } else {
          setUpdateStatusState({
            ...updateStatusState,
            open: true,
            message: res.data.message,
          });
        }
      })
      .catch((err) => {
        setUpdateStatusState({
          ...updateStatusState,
          open: true,
          message: err.data,
        });
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
                <div className="note">{candidature?.note}</div>
              )}
              {status == CANDIDATURE_STATUS.test && (
                <div className="note">
                  {noteTest}/{totalTest}
                </div>
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
            {status == CANDIDATURE_STATUS.test && (
              <div className="candidature-card-actions flex">
                <Button
                  className="div-success"
                  variant="contained"
                  onClick={() => fairePasserEntretien()}
                  disabled={updateStatusState.disableEntretienBtn}
                >
                  Faire passer l'entretien
                </Button>
              </div>
            )}
            {status == CANDIDATURE_STATUS.entretien && (
              <div className="candidature-card-actions flex">
                <Button
                  className="div-success"
                  variant="contained"
                  onClick={() => setOpenContrat(true)}
                  // disabled={updateStatusState.disableEntretienBtn}
                >
                  Embaucher
                </Button>
                <Dialog open={openContrat} fullWidth={true} maxWidth={"lg"}>
                  {/* <Provider store={contratStore}> */}
                  <ContratFormRoot
                    idJob={idJob}
                    job={jobTitle}
                    idUtilisateur={candidature.utilisateur.id}
                  />
                  {/* </Provider> */}
                  <DialogActions>
                    <Button
                      className="div-danger"
                      onClick={() => setOpenContrat(false)}
                    >
                      Annuler la rédaction
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            )}
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
