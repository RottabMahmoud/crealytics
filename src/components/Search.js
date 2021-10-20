import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { List } from "react-virtualized";
import { makeStyles } from "@material-ui/core/styles";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "blue",
    fontFamily: "Roboto Mono",
    backgroundColor: "#f2f2f2",
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "green",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "green",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "red",
    },
    "& .MuiAutocomplete-groupLabel": {
      border: "1px solid black",
    },
  },
  clearIndicator: {
    display: "none",
  },
  paper: { border: "1px solid black" },
}));

const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref
) {
  const { children, role, ...other } = props;
  const itemCount = Array.isArray(children) ? children.length : 0;
  const itemSize = 90;

  return (
    <div ref={ref}>
      <div {...other}>
        <List
          height={250}
          width={300}
          rowHeight={itemSize}
          overscanCount={5}
          rowCount={itemCount}
          rowRenderer={(props) => {
            return React.cloneElement(children[props.index], {
              style: props.style,
            });
          }}
          role={role}
        />
      </div>
    </div>
  );
});

export default function Search({ data, setSearch }) {
  const classes = useStyles();
  const [value] = React.useState("");

  return (
    <Autocomplete
      id="virtualize"
      classes={classes}
      style={{ width: "19em" }}
      ListboxComponent={ListboxComponent}
      onChange={(event, value) => setSearch(value)}
      onInputChange={() => setSearch(value)}
      options={data.map((x) => x.title)}
      listbox={{ backgroundColor: "black" }}
      disablePortal={true}
      renderInput={(params) => (
        <TextField
          {...params}
          value={value}
          onChange={(event) => setSearch(event.target.value)}
          variant="outlined"
          label="Search"
          fullWidth
        />
      )}
    />
  );
}
