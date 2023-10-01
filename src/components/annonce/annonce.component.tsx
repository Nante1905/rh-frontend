import {FormEvent } from "react";
import "./annonce.component.scss";

// const Annonce = () => {
//     return (
//     <div className="annonce">
//       <div className="annonce_job">
//         <div className="annonce_body-column">
//           <div className="annonce_body-item">Job :</div>
//           <div className="annonce_body-item">Service :</div>
//           <div className="annonce_body-item">Salaire</div>
//         </div>
//         <div className="annonce_body-column">
//           <div className="annonce_body-item">Date :</div>
//           <div className="annonce_body-item">Location :</div>
//         </div>
//       </div>
//       <button className="btn" type="submit">Voir plus</button>
//     </div>

// );
    
// };


// export default Annonce;

const annoncesData = [
    { id: 1, job: 'Job 1', service: 'Service 1', salaire: '1000$', date: 'Date 1', location: 'Location 1' },
    { id: 2, job: 'Job 2', service: 'Service 2', salaire: '1200$', date: 'Date 2', location: 'Location 2' },
    { id: 3, job: 'Job 3', service: 'Service 3', salaire: '1100$', date: 'Date 3', location: 'Location 3' },
    // Ajoutez d'autres annonces ici
  ];
  
  const Annonce = ({ data }) => {
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
        <button className="btn" type="submit">Voir plus</button>
      </div>
    );
  };
  
  const App = () => {
    const annoncesInColumns = [[], []];
  
    // Distribuer les annonces dans les colonnes
    annoncesData.forEach((annonce, index) => {
      annoncesInColumns[index % 2].push(
        <Annonce key={annonce.id} data={annonce} />
      );
    });
  
    return (
      <div>
        <div className="annonces-container">
          <div className="column">{annoncesInColumns[0]}</div>
          <div className="column">{annoncesInColumns[1]}</div>
        </div>
      </div>
    );
  };
  
  export default App;
  