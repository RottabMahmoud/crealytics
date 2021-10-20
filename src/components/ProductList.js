import React, { useState } from "react";
import Search from "./Search.js";
import Typography from "@mui/material/Typography";
import { List, ListItem, makeStyles, Divider, Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Popover from "@mui/material/Popover";
import Images from "../components/Images.js";
import Pagination from "@mui/material/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    padding: theme.spacing(1.2),
  },
  avatar: { marginRight: theme.spacing(5) },
  paginator: {
    justifyContent: "center",
    padding: "10px",
  },
}));
const PopoverStyle = {
  top: "50px",
};

const ProductList = ({ data }) => {
  // Search Input field state
  const [searchTerm, setSearchTerm] = useState("");

  // PopOver State and functions for expansion
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [images, setImages] = useState();

  const handleClick = (event, value) => {
    setAnchorEl(event.currentTarget);
    setImages(value);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // PAGINATION Handling
  const classes = useStyles();
  const itemsPerPage = 100;
  const [page, setPage] = React.useState(1);
  const noOfPages = Math.ceil(
    data.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()))
        return val;
    }).length / itemsPerPage
  );

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
      <div className="toolbar">
        {/* Our Input Search Field */}
        <Search data={data} setSearch={setSearchTerm} />
      </div>
      <List dense compoent="span">
        {data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
              return val;
          })
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((projectItem) => {
            return (
              <ListItem
                key={projectItem.gtin}
                button
                onClick={(event) => {
                  handleClick(event, projectItem.additional_image_link);
                }}
              >
                <ListItemText
                  id={projectItem.gtin}
                  primary={projectItem.title}
                  secondary={`Serial-${
                    projectItem.gtin
                  } Type-${projectItem.gender.toUpperCase()} Price-${
                    projectItem.price
                  }
                    Sale-Price-${projectItem.sale_price}`}
                  className={classes.item}
                />
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${projectItem + 1}`}
                    src={projectItem.image_link}
                    className={classes.avatar}
                  />
                </ListItemAvatar>
              </ListItem>
            );
          })}
      </List>
      {/* The Expansion Popover */}
      <Popover
        id={id}
        style={PopoverStyle}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open}
      >
        {/*List of Images Component */}
        <Images itemData={images} />
      </Popover>
      <Divider />
      {/* Pagination Component */}
      <Box component="span">
        <Pagination
          classes={{ ul: classes.paginator }}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          defaultPage={1}
          page={page}
          count={noOfPages}
          onChange={handleChange}
        />
      </Box>
    </div>
  );
};

export default ProductList;
