import {
  domains,
  exps,
  situationMatrimonial,
  options,
} from "../../constant/CV";
import ServiceSelect from "../form-annonce/job-info/service-select/service-select.component";
import {
  Alert,
  Button,
  Card,
  Snackbar,
  TextField,
  styled,
} from "@mui/material";
import "./form-cs.scss";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { env } from "../../env";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FormCV = () => {
  const [name, setName] = useState<string>("");
  const [diplome, setDiplome] = useState<number>(1);
  const [domaine, setDomaine] = useState<number>(1);
  const [matrimonial, setMatrimonial] = useState<number>(1);
  const [experience, setExperience] = useState<number>(1);
  const [cv, setCV] = useState<File | null>(null);
  const [certificat, setCertificat] = useState<File | null>(null);
  const [uploadCvError, setUploadCvError] = useState<boolean>(false);
  const [uploadCertificatError, setUploadCertificatError] =
    useState<boolean>(false);

  const handleCVUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (file.type == "application/pdf") {
        setCV(file);
        setUploadCvError(false);
      } else {
        setUploadCvError(true);
      }
    }
  };

  const handleCertificatUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (file.type == "application/pdf") {
        setCertificat(file);
        setUploadCertificatError(false);
      } else {
        setUploadCertificatError(true);
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const info = {
      nom: name.trim(),
      utilisateur: { id: 1 },
      diplome: { diplome: { id: diplome } },
      domaine: { domaine: { id: domaine } },
      matrimonial: { matrimonial: { id: matrimonial } },
      experience: { experience: { id: experience } },
    };

    const formData = new FormData();

    formData.append(
      "info",
      new Blob([JSON.stringify(info)], { type: "application/json" })
    );
    formData.append("cv", cv as File);
    formData.append("certificat", certificat as File);
    axios
      .post(`${env.apiUrl}/cv/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="cv__form bg__blue">
      <div className="title">
        <h1>Créez votre CV</h1>
      </div>
      <Card className="cv__form__card">
        <form encType="multipart/form-data" onSubmit={handleFormSubmit}>
          <div className="cv__form__element center">
            <TextField
              variant="outlined"
              label="Nom du CV"
              className="input__large"
              onChange={(
                event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setName(event.target.value)}
            />
          </div>
          <div className="cv__form__element flex">
            <ServiceSelect
              option={options}
              selectLabel="Diplome"
              selectValue={diplome}
              onChange={(
                event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setDiplome(Number(event.target.value))}
            />
            <ServiceSelect
              option={domains}
              selectLabel="Domaine"
              selectValue={domaine}
              onChange={(
                event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setDomaine(Number(event.target.value))}
            />
          </div>
          <div className="cv__form__element">
            <ServiceSelect
              option={exps}
              selectLabel="Experience"
              selectValue={experience}
              onChange={(
                event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setExperience(Number(event.target.value))}
            />
          </div>
          <div className="cv__form__element">
            <ServiceSelect
              option={situationMatrimonial}
              selectLabel="Situation matrimonial"
              selectValue={matrimonial}
              onChange={(
                event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setMatrimonial(Number(event.target.value))}
            />
          </div>
          <div className="cv__form__element flex ">
            <div>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                className="btn__upload"
              >
                Votre CV (pdf)
                <VisuallyHiddenInput type="file" onChange={handleCVUpload} />
              </Button>
              {cv ? <p>{cv.name}</p> : <p>Aucun fichier pdf importé</p>}
            </div>
            <div>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                className="btn__upload"
              >
                Un certificat de travail(pdf)
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleCertificatUpload}
                />
              </Button>
              {certificat ? (
                <p>{certificat.name}</p>
              ) : (
                <p>Aucun fichier pdf importé</p>
              )}
            </div>
          </div>
          {/* Snackbar for UPLOAD ERROR */}
          <Snackbar
            open={uploadCvError}
            onClose={() => setUploadCvError(false)}
          >
            <Alert
              severity="error"
              sx={{ width: "100%" }}
              onClose={() => setUploadCvError(false)}
            >
              Veuillez importer un CV en PDF s'il vous plaît.
            </Alert>
          </Snackbar>
          <Snackbar
            open={uploadCertificatError}
            onClose={() => setUploadCertificatError(false)}
          >
            <Alert
              severity="error"
              sx={{ width: "100%" }}
              onClose={() => setUploadCertificatError(false)}
            >
              Veuillez importer un Certificat de travail en PDF s'il vous plaît.
            </Alert>
          </Snackbar>
          <div className="cv__form__element center">
            <Button variant="contained" type="submit" className="btn__submit">
              Créer mon CV
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default FormCV;
