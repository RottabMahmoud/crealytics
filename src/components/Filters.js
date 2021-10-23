import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Filters = ({ handleOnSelect, valueSelect, handlePrice, valueCheck }) => {
  return (
    <div style={{ display: "flex", margin: "1em" }}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            onChange={handleOnSelect}
            value={valueSelect}
            autoWidth={true}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Unisex"}>Unisex</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handlePrice}
            checked={valueCheck}
            inputProps={{ "aria-label": "controlled" }}
            data-testid={`check`}
          />
        }
        label="On-Sale"
        style={{ margin: "1em" }}
      />
    </div>
  );
};

export default Filters;
