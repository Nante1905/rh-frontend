/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { TypeConge } from "../../types/JobCriteria";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TypeCongeSelect = ({
  option,
  selectLabel,
  selectValue,
  onChange,
}: any) => {
  console.log(option);

 

  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel id="demo-simple-select-label">{selectLabel}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectValue}
        label={selectLabel}
        onChange={onChange}
        required
      >
        {option.map((e: TypeConge) => (
          <MenuItem key={e.id} value={e.id}>
            {e.nom}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TypeCongeSelect;
