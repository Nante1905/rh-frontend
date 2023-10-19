import React from "react";
import "./Filter.component.scss";
import { Button, TextField } from "@mui/material";

const Filter = (props) => {
  const handleSubmit = (value: string) => {
    props.handleSubmit(value);
  };

  return (
    <div className="filter_container">
      <div className="filter_container_card">
        <TextField
          label="Mission"
          type="text"
          multiline
          onChange={(event) => handleSubmit(event.target.value)}
        />
        <Button variant="contained" className="btn">
          Filtrer
        </Button>
      </div>
    </div>
  );
};

export default Filter;
