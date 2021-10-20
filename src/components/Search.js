import React from "react";
import "../App.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { List } from "react-virtualized";
import { makeStyles } from "@material-ui/core/styles";

// Use Styles for styling components
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

// ListBox,in which; it will be rendered to autocomplete
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
          width={420}
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
      style={{ width: "27em" }}
      listbox={{ backgroundColor: "black" }}
      ListboxComponent={ListboxComponent}
      options={data.map((x) => x.title)}
      disablePortal={true}
      onChange={(event, value) => setSearch(value)}
      onInputChange={() => setSearch(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Search"
          value={value}
          fullWidth
          onChange={(event) => setSearch(event.target.value)}
        />
      )}
    />
  );
}
