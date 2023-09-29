import {
  domains,
  exps,
  situationMatrimonial,
  options,
} from "../../constant/CV";
import ServiceSelect from "../form-annonce/job-info/service-select/service-select.component";
import { Alert, Button, Card, Snackbar, styled } from "@mui/material";
import "./form-cs.scss";
import React, { ChangeEvent, useState } from "react";
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

  return (
    <div className="cv__form bg__blue">
      <div className="title">
        <h1>Créez votre CV</h1>
      </div>
      <Card className="cv__form__card">
        <form>
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
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleCVUpload}
                  required
                />
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
                  required
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
        </form>
      </Card>
    </div>
  );
};

export default FormCV;
