import "./annonce.component.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Annonce = ({ data }: any) => {
  return (
    <div className="annonce">
      <div className="annonce_job">
        <div className="annonce_body-column">
          <div className="annonce_body-item-title">Job: {data.job}</div>
          <div className="annonce_body-item">Service: {data.service}</div>
          <div className="annonce_body-item">Salaire: {data.salaire}</div>
        </div>
        <div className="annonce_body-column">
          <div className="annonce_body-item">Date: {data.date}</div>
          <div className="annonce_body-item">Location: {data.location}</div>
        </div>
      </div>
      <div className="btn-submit-container">
        <button className="btn">Voir plus</button>
      </div>
    </div>
  );
};

export default Annonce;
