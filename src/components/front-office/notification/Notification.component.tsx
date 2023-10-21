import React, { useEffect, useState } from "react";
import "./Notification.component.scss";
import { ContratMin } from "../fo-contrat/types/ContratMin";
import ContratNotification from "../fo-contrat/components/contrat-notification/ContratNotification.component";
import { http } from "../../../interceptors/requestInterceptor";

const Notification = () => {
  const [contrats, setContrats] = useState<ContratMin[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    http
      .get("/contrats/utilisateurs/pending")
      .then((res) => {
        console.log(res);
        setContrats(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Impossible de charger les notifications");
      });
  }, []);
  //   const contrats: ContratMin[] = [
  //     {
  //       id: 1,
  //       poste: "Dev java",
  //       type: "Contrat d'essai",
  //     },
  //   ];
  return (
    <div className="notification_root">
      <h1 className="title">Notifications</h1>
      {error != null && <p>{error}</p>}
      {contrats.map((c, i) => (
        <ContratNotification key={`c${i}`} contrat={c} />
      ))}
    </div>
  );
};

export default Notification;
