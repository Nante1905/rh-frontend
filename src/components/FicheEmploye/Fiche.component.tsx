import React from 'react';
import { Container, Paper, Typography} from '@mui/material';
import './fiche.component.scss';



function EmployeProfile() {


  return (
    <Container maxWidth="sm">
      <Paper className="paper" elevation={3}>
        <h2 className="title">
            Informations Personnelles
        </h2>
        <div className="info">
          <strong>Nom:</strong>
          <Typography variant="body1">Dupont</Typography>
        </div>
        <div className="info">
          <strong>Prénom:</strong>
          <Typography variant="body1">Jean</Typography>
        </div>
        <div className="info">
          <strong>Date de Naissance:</strong>
          <Typography variant="body1">15/07/1985</Typography>
        </div>
        <div className="info">
          <strong>Contrat:</strong>
          <Typography variant="body1">CDI</Typography>
        </div>
        <div className="info">
          <strong>Poste:</strong>
          <Typography variant="body1">Ingénieur</Typography>
        </div>
        <div className="info">
          <strong>Numéro Matricule:</strong>
          <Typography variant="body1">123456</Typography>
        </div>
      </Paper>
    </Container>
  );
}

export default EmployeProfile;


