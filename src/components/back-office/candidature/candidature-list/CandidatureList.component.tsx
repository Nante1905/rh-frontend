/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import "./CandidatureList.component.scss";
import { Candidature } from "../../../../types/Candidature";
import { env } from "../../../../env";
import CandidatureCard from "../candidature-card/CandidatureCard.component";
import { CANDIDATURE_STATUS } from "../../../../constant/CandidatureStatus";
import { http } from "../../../../interceptors/requestInterceptor";

const CandidatureList = (props: any) => {
  const idJob = props.idJob;
  // Status 0 : postulé
  // Status 3 : sélectioin
  // Status 5 : test
  const status = props.status;
  const [candidatures, setCandidatures] = useState<Candidature[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let url = env.apiUrl;
    if (status == CANDIDATURE_STATUS.postule) {
      url += `/job/${idJob}/candidatures`;
    } else if (status == CANDIDATURE_STATUS.selection) {
      url += `/job/${idJob}/selections`;
    } else if (status == CANDIDATURE_STATUS.test) {
      url += `/job/${idJob}/tests`;
    } else if (status == CANDIDATURE_STATUS.entretien) {
      url += `/job/${idJob}/entretiens`;
    }
    http
      .get(url)
      .then((res) => {
        console.log(res);

        setCandidatures(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  return (
    <div className="candidature-list-container">
      {error ? (
        <p>Une erreur est survenue. Réessayez</p>
      ) : (
        <>
          {candidatures.map((c, i) => (
            <CandidatureCard key={`c_${i}`} candidature={c} status={status} />
          ))}
        </>
      )}
    </div>
  );
};

export default CandidatureList;
