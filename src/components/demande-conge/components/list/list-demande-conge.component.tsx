import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./list-demande-conge.component.scss";
import { DemandeConge } from "../../types/demande-conge.interface";

const ListDemandeCongeComponent = (props: any) => {
  const demandes: DemandeConge[] = props.demandes;
  const chef: boolean = props.chef;

  return (
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
                    <Button className="div-success" variant="contained">
                      Accepter
                    </Button>
                    <Button className="div-danger" variant="contained">
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
  );
};

export default ListDemandeCongeComponent;
