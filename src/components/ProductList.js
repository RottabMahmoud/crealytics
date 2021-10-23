import React, { useState, useEffect } from "react";
import { List, ListItem, makeStyles, Divider, Box } from "@material-ui/core";
import Search from "./Search.js";
import Filters from "./Filters.js";

import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Popover from "@mui/material/Popover";
import Images from "../components/Images.js";
import Pagination from "@mui/material/Pagination";
// Styling our list of items
const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.spacing(1.2),
  },
  avatar: { marginRight: theme.spacing(5) },
  paginator: {
    justifyContent: "center",
    margin: "1em",
  },
  filter: {
    margin: "1em",
  },
}));
// Styling the Pop over postion
const PopoverStyle = {
  top: "50px",
};

const ProductList = ({ data }) => {
  /**
   * Search Input field state.
   */
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Filters states and Function Handling.
   */
  const [gender, setGender] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const selectOnChange = (event) => {
    setGender(event.target.value);
    filterGender(event.target.value);
  };
  const filterGender = (str) => {
    let temp = [];
    for (let i = 0; i < listOfItems.length; i++) {
      if (listOfItems[i].gender.toLowerCase() === str.toLowerCase())
        temp.unshift(listOfItems[i]);
      else temp.push(listOfItems[i]);
    }
    setListOfItems(temp);
  };
  const handlePriceCheck = (event) => {
    setChecked(!checked);
    if (gender === "" && !checked) checkSaleOnEmptyGender(checked);
    if (gender === "" && checked) checkSaleOnEmptyGender(checked);
    if (gender === "Male" && checked)
      checkSaleOnExistingGender(checked, "male");
    if (gender === "Male" && !checked)
      checkSaleOnExistingGender(checked, "male");
    if (gender === "Female" && checked)
      checkSaleOnExistingGender(checked, "Female");
    if (gender === "Female" && !checked)
      checkSaleOnExistingGender(checked, "Female");
    if (gender === "Unisex" && checked)
      checkSaleOnExistingGender(checked, "Unisex");
    if (gender === "Unisex" && !checked)
      checkSaleOnExistingGender(checked, "Unisex");
  };
  const checkSaleOnEmptyGender = (bool) => {
    let temp = [];

    if (!bool) {
      listOfItems.forEach((x) => {
        if (x.sale_price.split(" ")[0] < x.price.split(" ")[0]) temp.unshift(x);
        else temp.push(x);
      });
      setListOfItems(temp);
    } else {
      listOfItems.forEach((x) => {
        // console.log(x.sale_price.split(" ")[0], "BOOO");
        if (+x.sale_price.split(" ")[0] === +x.price.split(" ")[0])
          temp.unshift(x);
        else temp.push(x);
      });
      setListOfItems(temp);
    }
  };
  const checkSaleOnExistingGender = (bool, gender) => {
    let temp = [];

    if (!bool) {
      listOfItems.forEach((x) => {
        if (
          gender.toLowerCase() === x.gender.toLowerCase() &&
          +x.sale_price.split(" ")[0] < +x.price.split(" ")[0]
        )
          temp.unshift(x);
        else temp.push(x);
      });
      setListOfItems(temp);
    } else {
      listOfItems.forEach((x) => {
        // console.log(x.sale_price.split(" ")[0], "BOOO");
        if (
          gender.toLowerCase() === x.gender.toLowerCase() &&
          +x.sale_price.split(" ")[0] === +x.price.split(" ")[0]
        )
          temp.unshift(x);
        else temp.push(x);
      });
      setListOfItems(temp);
    }
  };

  /**
   * Our Product List state, and use Effect to set it to be equal to the data coming as our prop, once the ProductList
   * is Rendered
   */
  const [listOfItems, setListOfItems] = useState([]);
  useEffect(() => {
    setListOfItems(data);
  }, [data]);
  /**
   * The List Item OnClick Event to Trigger the Popover and pass the Additional Images of the selected Item.
   */
  const handleClick = (event, value) => {
    setAnchorEl(event.currentTarget);
    setImages(value);
  };

  /**
   * PopOver State and functions for expansion.
   */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Our Additional Images array of Strings
  const [images, setImages] = useState();

  /**
   * PAGINATION Handling.
   */
  const [page, setPage] = React.useState(1);
  const classes = useStyles();
  // A Function to Calculate the Total Number of Pages
  const itemsPerPage = 100; // No of Items per Page
  const noOfPages = Math.ceil(
    listOfItems.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()))
        return val;
      return null;
    }).length / itemsPerPage
  );
  // Renders the selected page items upon selection of paging
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
      <div className={classes.filter}>
        {/* Our Input Search Field */}
        <Search data={listOfItems} setSearch={setSearchTerm} />
        {/* our Filters */}
        <Filters
          valueSelect={gender}
          handleOnSelect={selectOnChange}
          valueCheck={checked}
          handlePrice={handlePriceCheck}
        />
      </div>
      <List dense compoent="span">
        {listOfItems
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
              return val;
            return null;
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
                  className={classes.item}
                  id={projectItem.gtin}
                  primary={projectItem.title}
                  secondary={`GTIN-${
                    projectItem.gtin
                  }, GENDER-${projectItem.gender
                    .charAt(0)
                    .toUpperCase()
                    .concat(...projectItem.gender.slice(1))}, PRICE-${
                    projectItem.price
                  },
                    SALE-PRICE-${projectItem.sale_price}`}
                />
                <ListItemAvatar>
                  <Avatar
                    className={classes.avatar}
                    src={projectItem.image_link}
                    alt={`Avatar n°${projectItem + 1}`}
                  />
                </ListItemAvatar>
              </ListItem>
            );
          })}
      </List>
      {/* The Expansion Popover */}
      <Popover
        style={PopoverStyle}
        id={id}
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
          page={page}
          classes={{ ul: classes.paginator }}
          count={noOfPages}
          onChange={handleChange}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          defaultPage={1}
        />
      </Box>
    </div>
  );
};

export default ProductList;
