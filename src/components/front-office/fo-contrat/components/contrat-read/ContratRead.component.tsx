import React, { useEffect, useState } from "react";
import "./ContratRead.component.scss";
import { Button } from "@mui/material";
import { Contrat } from "../../types/Contrat";
import { useNavigate, useParams } from "react-router-dom";
import { Utilisateur } from "../../../../../types/Utilisateur";
import HTMLReactParser from "html-react-parser";
import { accept, decline, findAll } from "../../services/Contrat.service";

const ContratRead = () => {
  const [contrat, setContrat] = useState<Contrat | null>(null);
  const [error, setError] = useState<string | null>(null);
  const idContrat = useParams().id;
  const navigate = useNavigate();
  console.log(`id ${idContrat}  now fetching ...`);

  useEffect(() => {
    console.log("Use effect fetching data");

    findAll(idContrat as string)
      .then((res) => {
        console.log("dataaaa");

        console.log(res.data);
        setContrat(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Impossible de charger le contrat");
      });
  }, []);

  const handleAccept = () => {
    accept(idContrat as string)
      .then((res) => {
        console.log(res.data);
        navigate("/client");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDecline = () => {
    decline(idContrat as string)
      .then((res) => {
        console.log(res.data);
        navigate("/client");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getTitle = (u: Utilisateur) => {
    let title = "M.";

    if (u.genre.id == 2) {
      title = "Mme";
    }
    return `${title} ${contrat?.utilisateur.nom} ${contrat?.utilisateur.prenom}`;
  };

  return (
    <div className="contrat_container">
      {error != null ? (
        <p>{error}</p>
      ) : (
        <>
          {contrat != null && (
            <>
              <h1 className="title">{contrat?.type.nom}</h1>
              <div>
                <div className="contrat_container_header">
                  <p>Entre les soussignés</p>
                  <div className="text">
                    <p>La société IT University</p>
                    <p>Adresse Andoharanofotsy </p>
                  </div>
                  <p>et</p>
                  <div className="text">
                    <p>{getTitle(contrat?.utilisateur as Utilisateur)}</p>
                    <p>Demeurant à {contrat?.utilisateur.ville.nom}</p>
                  </div>
                </div>
                <div className="title">
                  <strong>Il a été convenu ce qui suit:</strong>
                </div>
                <div className="contrat_container_child">
                  <h2 className="subtitle">Article 1 - Engagement</h2>
                  <div className="text">
                    <p>
                      Sous réserve des résultats d’embauche décidant de
                      l’aptitude de{" "}
                      {getTitle(contrat?.utilisateur as Utilisateur)} au poste
                      proposé,{" "}
                      <strong>
                        {getTitle(contrat?.utilisateur as Utilisateur)}
                      </strong>{" "}
                      est engagé(e) par la société IT University au poste de{" "}
                      <strong>{contrat?.job.title}</strong> et sera classé(e)
                      dans la catégorie{" "}
                      <strong>{contrat?.categorie.nom}</strong>
                    </p>
                    <p>
                      Ce contrat prend effet à compter du{" "}
                      <strong>
                        {contrat?.debut} au {contrat?.fin}
                      </strong>{" "}
                      .
                    </p>
                  </div>
                </div>
                {/* <div className="contrat_container_child">
              <h2 className="subtitle">Article 2 - Période d'essai</h2>
              <div className="text">
                <p>
                  Le présent contrat est conclu pour une [durée indéterminée].
                </p>
                <p>
                  Il ne deviendra définitif qu’à l’expiration d’une période
                  d’essai de <strong>[jours]</strong> jours.
                </p>
                <p>
                  Il est expressément convenu que la période d’essai s’entend
                  d’un travail effectif.
                </p>
                <p>
                  Jusqu’à cette date, il sera possible à [M/Mme. Nom], comme à
                  l’entreprise, de rompre le contrat de travail sans indemnité.
                </p>
              </div>
            </div> */}
                <div className="contrat_container_child">
                  <h2 className="subtitle">Article 2 - Fonctions</h2>
                  <div className="text">
                    <div>
                      {getTitle(contrat?.utilisateur as Utilisateur)} en sa
                      qualité de {contrat?.job.title} sera plus particulièrement
                      chargé(e) de:
                      <div>
                        {HTMLReactParser(contrat?.job.mission as string)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contrat_container_child">
                  <h2 className="subtitle">Article 3 - Horaire de travail</h2>
                  <div className="text">
                    <p>
                      {getTitle(contrat?.utilisateur as Utilisateur)} est
                      assujetti à l’horaire de travail de l’établissement, soit
                      une durée mensuelle de{" "}
                      <strong>{contrat?.job.volume}</strong> heures.
                    </p>
                    <p>
                      {getTitle(contrat?.utilisateur as Utilisateur)} pourra
                      être amené à effectuer des heures supplémentaires à la
                      demande de la Direction qui seront rémunérées conformément
                      aux dispositions légales et conventionnelles en vigueur.
                    </p>
                  </div>
                </div>
                <div className="contrat_container_child">
                  <h2 className="subtitle">Article 4 - Congés payés</h2>
                  <div className="text">
                    <p>
                      {getTitle(contrat?.utilisateur as Utilisateur)}{" "}
                      bénéficiera des droits à congés payés conformément aux
                      dispositions légales (ou conventionnelles) en vigueur.
                    </p>
                  </div>
                </div>
                <div className="contrat_container_child">
                  <h2 className="subtitle">Article 5 - Avantages sociaux</h2>
                  <div className="text">
                    <div>
                      {getTitle(contrat?.utilisateur as Utilisateur)} relevant
                      de la catégorie professionnelle des employés, sera
                      affilié(e) dès son entrée au sein de la société à :
                      <ul>
                        {contrat?.avantages.map((a, i) => (
                          <li key={`a_${i}`}>{a.nom}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="contrat_container_child">
                  <p>Fait à Andoharanofotsy, le {contrat?.creation} </p>
                </div>
                <div className="contrat_actions">
                  <Button
                    variant="contained"
                    className="div-danger"
                    onClick={handleDecline}
                  >
                    Décliner
                  </Button>
                  <Button
                    variant="contained"
                    className="div-success"
                    onClick={handleAccept}
                  >
                    Accepter
                  </Button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ContratRead;
