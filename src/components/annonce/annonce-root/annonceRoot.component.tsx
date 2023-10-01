import Annonce from "../annonce-card/annonce.component";
import "./annonceRoot.component.scss";

const AnnonceRoot = () => {
  const annoncesData = [
    {
      id: 1,
      job: "Job 1",
      service: "Service 1",
      salaire: "1000$",
      date: "Date 1",
      location: "Location 1",
    },
    {
      id: 2,
      job: "Job 2",
      service: "Service 2",
      salaire: "1200$",
      date: "Date 2",
      location: "Location 2",
    },
    {
      id: 3,
      job: "Job 3",
      service: "Service 3",
      salaire: "1100$",
      date: "Date 3",
      location: "Location 3",
    },
  ];

  return (
    <div className="annonce-root">
      <h1>Liste des annonces</h1>
      <div className="annonce-root_container">
        {annoncesData.map((e) => (
          <Annonce data={e} />
        ))}
      </div>
    </div>
  );
};

export default AnnonceRoot;
