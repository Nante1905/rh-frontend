/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./ContratNotification.component.scss";
import { Button, Card, CardContent } from "@mui/material";
import { ContratMin } from "../../types/ContratMin";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

const ContratNotification = (props: any) => {
  const contrat: ContratMin = props.contrat;
  const navigate = useNavigate();

  const handleReadContrat = () => {
    navigate(`/client/contrats/${contrat.id}`);
  };

  return (
    <div>
      <Card className="notification_card">
        <CardContent className="notification_content">
          <p>
            Vous avez reçu un <strong>{contrat.type}</strong> pour le poste de{" "}
            <strong>{contrat.poste}</strong>{" "}
          </p>
          <div className="actions">
            <Button
              className="actions_btn div-success"
              onClick={handleReadContrat}
            >
              <VisibilityIcon />
              <span>Lire</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContratNotification;
