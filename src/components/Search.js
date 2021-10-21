import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import { List } from "react-virtualized";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

/**
 * Use Styles for styling components, to style our Search Input Field, and the text after selection from the
 * autoComplete suggestions.
 */
const useStyles = makeStyles(() => ({
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

/**
 * ListBox,in which; it will be rendered to autocomplete.
 */
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
          role={role}
          rowRenderer={(props) => {
            return React.cloneElement(children[props.index], {
              style: props.style,
            });
          }}
          rowCount={itemCount}
          rowHeight={itemSize}
          height={250}
          width={420}
          overscanCount={5}
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
      ListboxComponent={ListboxComponent}
      options={data.map((x) => x.title)}
      onChange={(event, value) => setSearch(value)} // for handling the auto complete selection upon selection
      id="virtualize"
      classes={classes}
      style={{ width: "26.4em" }}
      listbox={{ backgroundColor: "black" }}
      disablePortal={true}
      renderInput={(params) => (
        <TextField
          onChange={(event) => setSearch(event.target.value)} // Upon typing it dynamically starts to update the rendered list
          value={value}
          label="Search"
          {...params}
          id="searchField"
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
}
