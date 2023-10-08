/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import "./DetailsAnnonce.component.scss";
import JobCard from "../../../job-card/JobCard.component";
import { JobDetail } from "../../../form-annonce/types/JobCriteria";
import axios from "axios";
import { env } from "../../../../env";
import { Alert, Snackbar, Tab, Tabs } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import CandidatureList from "../../candidature/candidature-list/CandidatureList.component";

const DetailsAnnonce = (props: any) => {
  const [annonce, setAnnonce] = useState<JobDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<string>("1");
  const location = useLocation();
  const idJob = useParams().id;
  useEffect(() => {
    // setIdJob(location.state.id);

    axios
      .get(`${env.apiUrl}/job/${idJob}`)
      .then((res) => {
        console.log(res.data);
        setAnnonce(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Impossible de récupérer l'annonce");
      });
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <>
      <div className="details-annonce-container">
        {annonce != null && <JobCard annonce={annonce} />}
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
        <div className="candidature-container">
          <h2 className="title">Candidatures</h2>
          <Tabs
            value={tab}
            onChange={handleTabChange}
            aria-label="wrapped label tabs example"
          >
            <Tab value="1" label="Candidatures" />
            <Tab value="2" label="Sélection de dossier" />
            <Tab value="3" label="Item Three" />
          </Tabs>
          {/* Component CandidatureList no antsoina, d any anaty component no mifetch */}
          {tab == "1" && <CandidatureList idJob={idJob} status={0} />}
          {tab == "2" && <CandidatureList idJob={idJob} status={3} />}
          {tab == "3" && <h1>Nanao test</h1>}
        </div>
      </div>
    </>
  );
};

export default DetailsAnnonce;
