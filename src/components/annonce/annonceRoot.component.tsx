import { useEffect, useState } from "react";
import "./annonceRoot.component.scss";
import { JobDetail } from "../form-annonce/types/JobCriteria";
import { http } from "../../interceptors/requestInterceptor";
import JobCard from "../job-card/JobCard.component";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
} from "@mui/material";
import { Cv } from "../../types/Utilisateur";
import { getAllCvOf } from "../../services/form-annonce/cv.service";
import { saveCandidature } from "../../services/candidature/candidature.service";
import { useNavigate } from "react-router-dom";

const AnnonceRoot = () => {
  const [annonces, setAnnonces] = useState<JobDetail[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [idCv, setIdCv] = useState<number>(1);
  const [idJob, setIdJob] = useState<number>(1);
  const [cvs, setCvs] = useState<Cv[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    http
      .get(`/job/notapplied`)
      .then((res) => {
        console.log(res.data);
        setAnnonces(res.data.jobs);
      })
      .catch((err) => {
        console.error(err);
      });
    getAllCvOf(
      (cv) => {
        setCvs(cv);
        setIdCv(cv[0].id);
      },
      (err) => console.log(err)
    );
  }, []);

  const onPostule = () => {
    saveCandidature(
      {
        id_job: idJob,
        id_cv: idCv,
      },
      (message) => console.log(message),
      (err) => console.log(err)
    );
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChangeSelect = (value: number) => {
    setIdCv(value);
  };

  return (
    <div className="annonce-root">
      <h1>Liste des annonces</h1>
      <div className="candidatures-btn">
        <Button variant="contained" onClick={() => navigate("/candidatures")}>
          Voir mes candidatures
        </Button>
      </div>
      <div className="annonce-root_container">
        {annonces.map((e, index) => (
          <div className="annonce-card" key={index}>
            <JobCard
              annonce={e}
              frontOffice={true}
              onPostule={(idJob: number) => {
                setIdJob(idJob);
                handleOpen();
              }}
            />
          </div>
        ))}
      </div>
      <div className="annonce-root_dialog">
        <Dialog className="dialog-root" open={open} onClose={handleClose}>
          <DialogTitle>Choisir votre CV</DialogTitle>
          <DialogContent>
            <Select
              autoFocus
              value={idCv}
              onChange={(event) =>
                handleChangeSelect(event.target.value as number)
              }
              label="Curiculum Vitae"
            >
              {cvs.map((e) => (
                <MenuItem value={e.id}>{e.nom}</MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="error">
              Annuler
            </Button>
            <Button
              onClick={() => {
                handleClose();
                navigate("/cv/create");
              }}
            >
              Créer CV
            </Button>
            <Button
              onClick={() => {
                handleClose();
                onPostule();
              }}
            >
              Postuler
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default AnnonceRoot;
