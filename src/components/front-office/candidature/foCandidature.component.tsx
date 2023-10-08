import { useEffect, useState } from "react";
import { http } from "../../../interceptors/requestInterceptor";
import JobCard from "../../job-card/JobCard.component";

const FoCandidature = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [annonces, setAnnonces] = useState<any>();

  useEffect(() => {
    http
      .get("/user/candidatures")
      .then((res) => {
        setAnnonces(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="annonce-root">
      <h1>Liste de vos candidatures</h1>
      <div className="annonce-root_container">
        {annonces?.candidatures?.map((e, index) => (
          <div className="annonce-card" key={index}>
            <JobCard annonce={e.job} status={e.status} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoCandidature;
