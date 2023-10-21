/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./EmployeList.Component.scss";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  frFR,
} from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";

const EmployeList = (props: any) => {
  const columns: GridColDef[] = [
    { field: "matricule", headerName: "Matricule", width: 100 },
    {
      field: "nom",
      headerName: "Nom",
      sortable: true,
      width: 200,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.nom || ""} ${params.row.prenom || ""}`,
    },
    { field: "genre", headerName: "Genre", width: 90 },
    { field: "age", headerName: "Age", type: "number", width: 30 },
    { field: "poste", headerName: "Poste", width: 150 },
    { field: "service", headerName: "Service" },
    { field: "contrat", headerName: "Type de contrat", width: 100 },
    {
      field: "anciennete",
      headerName: "Ancienneté",
      width: 100,
      hideSortIcons: true,
    },
    { field: "debutContrat", headerName: "Embauche", width: 100 },
    { field: "categorie", headerName: "Catégorie", width: 90 },
    {
      field: "presence",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        if (params.row.presence == false) {
          return <Chip label="Congé" className="div-danger" />;
        }
        return <Chip label="Présent" className="div-success" />;
      },
    },
  ];

  const emps = props.emps;

  // const [emps, setEmps] = useState<EmployeTab[]>([]);
  // useEffect(() => {
  //   findAllEmployes()
  //     .then((res) => {
  //       console.log(res.data);
  //       setEmps(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  //   const rows = [
  //     {
  //       id: 1,
  //       matricule: 1,
  //       nom: "Snow",
  //       prenom: "Jon",
  //       poste: "Développeur java",
  //       age: 35,
  //       contrat: "CDD - Contrat duréé déterminée",
  //     },
  //     {
  //       id: 2,
  //       matricule: 2,
  //       nom: "Lannister",
  //       prenom: "Cersei",
  //       poste: "Développeur java",
  //       age: 42,
  //     },
  //     {
  //       id: 3,
  //       matricule: 3,
  //       nom: "Lannister",
  //       prenom: "Jaime",
  //       poste: "Développeur java",
  //       age: 45,
  //     },
  //   ];

  return (
    <>
      <div className="table-container">
        <DataGrid
          rows={emps}
          rowHeight={130}
          rowSpacingType="border"
          // getRowHeight={() => "auto"}
          // getEstimatedRowHeight={() => 300}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          //   pageSizeOptions={[5, 10]}
          // checkboxSelection
          localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
          onRowClick={(params) => {
            const employe = params.row;
            // Utilisez le composant Link pour diriger l'utilisateur vers la page EmployeDetails
            // avec l'ID de l'employé
            return (
              <Link to={`/employe-details/${employe.id}`}>
                <button>Voir les détails</button>
              </Link>
            );
          }}
        />
      </div>
    </>
  );
};

export default EmployeList;
