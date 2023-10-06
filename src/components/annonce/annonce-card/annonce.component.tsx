import "./annonce.component.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Annonce = ({ data }: any) => {
  return (
    <div className="annonce">
      <div className="annonce_job">
        <div className="annonce_body-column">
          <div className="annonce_body-item-title">
            <h1>Job: {data.title}</h1>
          </div>
          <div className="annonce_body-item">Service: {data.service.name}</div>
          <div className="annonce_body-item">
            Salaire à partir de : {data.sal_min} Ar
          </div>
          <div className="annonce_body-item">
            Diplôme:
            {data.jobDiplome
              ? ` Au moins ${data.jobDiplome.diplome.nom}`
              : ` Pas mentionné`}
          </div>
        </div>
      </div>
      <div className="btn-submit-container">
        <button className="btn">Voir plus</button>
      </div>
    </div>
  );
};

export default Annonce;
