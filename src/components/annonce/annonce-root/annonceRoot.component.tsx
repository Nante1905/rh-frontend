import { useEffect, useState } from "react";
import Annonce from "../annonce-card/annonce.component";
import "./annonceRoot.component.scss";
import { JobDetail } from "../../form-annonce/types/JobCriteria";
import axios from "axios";
import { env } from "../../../env";

const AnnonceRoot = () => {
  // const annoncesData = [
  //   {
  //     id: 1,
  //     job: "Job 1",
  //     service: "Service 1",
  //     salaire: "1000$",
  //     date: "Date 1",
  //     location: "Location 1",
  //   },
  //   {
  //     id: 2,
  //     job: "Job 2",
  //     service: "Service 2",
  //     salaire: "1200$",
  //     date: "Date 2",
  //     location: "Location 2",
  //   },
  //   {
  //     id: 3,
  //     job: "Job 3",
  //     service: "Service 3",
  //     salaire: "1100$",
  //     date: "Date 3",
  //     location: "Location 3",
  //   },
  // ];

  const [annonces, setAnnonces] = useState<JobDetail[]>([]);

  useEffect(() => {
    axios
      .get(`${env.apiUrl}/job`)
      .then((res) => {
        console.log(res);
        setAnnonces(res.data.jobs);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="annonce-root">
      <h1>Liste des annonces</h1>
      <div className="annonce-root_container">
        {annonces.map((e, index) => (
          <Annonce key={index} data={e} />
        ))}
      </div>
    </div>
  );
};

export default AnnonceRoot;
