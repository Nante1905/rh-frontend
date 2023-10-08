/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServiceSelect = ({ option, selectLabel, selectValue, onChange }: any) => {
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
        {option.map((e: any) => (
          <MenuItem key={e?.id} value={e?.id}>
            {e?.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ServiceSelect;
