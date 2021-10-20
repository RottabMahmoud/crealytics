import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { List } from "react-virtualized";

const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref
) {
  const { children, role, ...other } = props;
  const itemCount = Array.isArray(children) ? children.length : 0;
  const itemSize = 36;

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
  // Handling onTyping to filter the Product List
  const onTagsChange = (event, values) => {
    setSearch(event.target.value);
  };
  return (
    <Autocomplete
      id="virtualize-demo"
      style={{ width: 300 }}
      disableListWrap
      ListboxComponent={ListboxComponent}
      options={data.map((x) => x.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={onTagsChange}
          variant="outlined"
          label="10,000 options"
          fullWidth
        />
      )}
    />
  );
}
