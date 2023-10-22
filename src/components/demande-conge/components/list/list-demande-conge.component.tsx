import {
  Alert,
  Button,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./list-demande-conge.component.scss";
import { DemandeConge } from "../../types/demande-conge.interface";
import { accepter, decliner } from "../../services/demande-conge.service";
import { useState } from "react";

const ListDemandeCongeComponent = (props: any) => {
  const demandes: DemandeConge[] = props.demandes;
  const chef: boolean = props.chef;
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);

  const accept = (id: number) => {
    accepter(id)
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
        setDisable(true);
      })
      .catch((err) => {
        console.error(err);
        setError("Erreur interne du serveur");
      });
  };

  const decline = (id: number) => {
    decliner(id)
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
        setDisable(true);
      })
      .catch((err) => {
        console.error(err);
        setError("Erreur interne du serveur");
      });
  };

  return (
    <>
      <div className="list-demande-conge">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="table-head">
              <TableRow>
                <TableCell>Matricule</TableCell>
                <TableCell>Employe</TableCell>
                <TableCell>Debut</TableCell>
                <TableCell>Fin</TableCell>
                <TableCell>Motif</TableCell>
                <TableCell>Type de conge</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demandes?.map((demande) => (
                <TableRow
                  key={demande.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{demande.emp.matricule}</TableCell>
                  <TableCell component="th" scope="row">
                    {`${demande.emp.utilisateur.nom} ${demande.emp.utilisateur.prenom}`}
                  </TableCell>
                  <TableCell>{demande.debut}</TableCell>
                  <TableCell>{demande.fin}</TableCell>
                  <TableCell>{demande.motif}</TableCell>
                  <TableCell>{demande.type.nom}</TableCell>
                  <TableCell>{demande.status}</TableCell>
                  {chef && (
                    <TableCell className="list-demande-conge_actions">
                      <Button
                        className="div-success"
                        variant="contained"
                        onClick={() => accept(demande.id)}
                        disabled={disable}
                      >
                        Accepter
                      </Button>
                      <Button
                        className="div-danger"
                        variant="contained"
                        onClick={() => decline(demande.id)}
                        disabled={disable}
                      >
                        Refuser
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Snackbar open={error != null} onClose={() => setError(null)}>
        <Alert
          severity="error"
          sx={{ width: "100%" }}
          onClose={() => setError(null)}
        >
          {error}
        </Alert>
      </Snackbar>
      <Snackbar open={success} onClose={() => setSuccess(false)}>
        <Alert
          severity="success"
          sx={{ width: "100%" }}
          onClose={() => setSuccess(false)}
        >
          Demande mise à jour.
        </Alert>
      </Snackbar>
    </>
  );
};

export default ListDemandeCongeComponent;
