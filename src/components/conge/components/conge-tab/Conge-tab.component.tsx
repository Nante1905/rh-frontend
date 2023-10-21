import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import "./Conge-card.component.scss";
import React from "react";

const CongeTab = () => {
  const columns: GridColDef[] = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "motif", headerName: "Motif", width: 130, sortable: false },
    {
      field: "type",
      headerName: "Type",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => `${params.row.type.nom}`,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell(params) {},
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div className="table-container">
      <DataGrid
        rows={rows}
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
  );
};

export default CongeTab;
