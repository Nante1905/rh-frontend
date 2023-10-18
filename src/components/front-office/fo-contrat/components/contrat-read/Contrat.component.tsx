import React from "react";
import "./Contrat.component.scss";
import { Button } from "@mui/material";

const Contrat = () => {
  return (
    <div className="contrat_container">
      <h1 className="title">
        {" "}
        [Contrat à durée Indeterminé avec période d'essai]
      </h1>
      <div>
        <div className="contrat_container_header">
          <p>Entre les soussignés</p>
          <div className="text">
            <p>La société IT University</p>
            <p>Adresse Andoharanofotsy </p>
          </div>
          <p>et</p>
          <div className="text">
            <p>[M/MMe Nom]</p>
            <p>Demeurant à [Adresse na ville]</p>
          </div>
        </div>
        <div className="title">
          <strong>Il a été convenu ce qui suit:</strong>
        </div>
        <div className="contrat_container_child">
          <h2 className="subtitle">Article 1 - Engagement</h2>
          <div className="text">
            <p>
              Sous réserve des résultats d’embauche décidant de l’aptitude de
              [M/Mme]. [Nom] au poste proposé, <strong>[M/Mme]. [Nom]</strong>{" "}
              est engagé(e) par la société IT University au poste de{" "}
              <strong>[Nom poste]</strong>
            </p>
            <p>
              Ce contrat prend effet à compter du{" "}
              <strong>[debut] au [fin]</strong> .
            </p>
          </div>
        </div>
        <div className="contrat_container_child">
          <h2 className="subtitle">Article 2 - Période d'essai</h2>
          <div className="text">
            <p>Le présent contrat est conclu pour une [durée indéterminée].</p>
            <p>
              Il ne deviendra définitif qu’à l’expiration d’une période d’essai
              de <strong>[jours]</strong> jours.
            </p>
            <p>
              Il est expressément convenu que la période d’essai s’entend d’un
              travail effectif.
            </p>
            <p>
              Jusqu’à cette date, il sera possible à [M/Mme. Nom], comme à
              l’entreprise, de rompre le contrat de travail sans indemnité.
            </p>
          </div>
        </div>
        <div className="contrat_container_child">
          <h2 className="subtitle">Article 3 - Fonctions</h2>
          <div className="text">
            <p>
              [M/Mme Nom] en sa qualité de [poste] seeera plus particulièrement
              chargé de:
              <ul>
                <li>[Mission]</li>
                <li>[Mission]</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="contrat_container_child">
          <h2 className="subtitle">Article 4 - Horaire de travail</h2>
          <div className="text">
            <p>
              [M/Mme Nom] est assujetti à l’horaire de travail de
              l’établissement, soit une durée hebdomadaire de{" "}
              <strong>[nbr]</strong> heures.
            </p>
            <p>
              [M/Mme Nom] pourra être amené à effectuer des heures
              supplémentaires à la demande de la Direction qui seront rémunérées
              conformément aux dispositions légales et conventionnelles en
              vigueur.
            </p>
          </div>
        </div>
        <div className="contrat_container_child">
          <h2 className="subtitle">Article 5 - Congés payés</h2>
          <div className="text">
            <p>
              [M/Mme Nom] bénéficiera des droits à congés payés conformément aux
              dispositions légales (ou conventionnelles) en vigueur.
            </p>
          </div>
        </div>
        <div className="contrat_container_child">
          <h2 className="subtitle">Article 6 - Avantages sociaux</h2>
          <div className="text">
            <p>
              [M/Mme Nom] relevant de la catégorie professionnelle des employés,
              sera affilié dès son entrée au sein de la société à :
              <ul>
                <li>Avantages</li>
                <li>Avantages</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="contrat_container_child">
          <p>Fait à Antananarivo, le [date] </p>
        </div>
        <div className="contrat_actions">
          <Button variant="contained">Valider</Button>
        </div>
      </div>
    </div>
  );
};

export default Contrat;
