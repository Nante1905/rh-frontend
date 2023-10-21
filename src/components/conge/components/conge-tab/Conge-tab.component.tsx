import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  frFR,
} from "@mui/x-data-grid";
import "./Conge-card.component.scss";
import React from "react";
import { Card, Chip, List, ListItem } from "@mui/material";
import { EtatConge } from "../../types/Conge";

const CongeTab = (props) => {
  const conge: EtatConge = props.conge;
  const columns: GridColDef[] = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "motif", headerName: "Motif", width: 130, sortable: false },
    {
      field: "type",
      headerName: "Type",
      sortable: false,
      width: 250,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.type.nom} (${
          params.row.type.deductible ? "Déductible" : "Non déductible"
        }) `,
    },
    { field: "debut", headerName: "Debut", width: 130 },
    { field: "fin", headerName: "Fin", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => {
        const classes = {
          "0": "div-warning",
          "-5": "div-danger",
          "5": "div-success",
        };
        return (
          <Chip
            label={params.row.status}
            className={classes[params.row.codeStatus]}
          />
        );
      },
    },
  ];

  return (
    <div className="conge_tab">
      <Card className="conge_info">
        <List>
          <ListItem>
            Nombre de congés cumulés depuis l'embauche:{"  "}
            <strong> {conge.etat.cumul}</strong>
          </ListItem>
          <ListItem>
            Nombre de congés pris: <strong> {conge.etat.consomme}</strong>
          </ListItem>
          <ListItem>
            Reste: <strong> {conge.etat.reste}</strong>
          </ListItem>
        </List>
      </Card>
      <div className="table-container">
        <DataGrid
          rows={conge.conge}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
          localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
        />
      </div>
    </div>
  );
};

export default CongeTab;
