import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "../components/Header";
// For CSV Conversion I used the d3 Library
import { csv } from "d3";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import Pagination from "@mui/material/Pagination";

// Helper Functions to set products on Pagination
import usePagination from "../mixins/Pagination";

function Home() {
  // Our list of Products **state, using React Hooks
  const [products, setProducts] = useState([]);

  let [page, setPage] = useState(1);
  const PER_PAGE = 100;

  const count = Math.ceil(products.length / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  /**
   * Use effect to fetch the data once the component is rendered,
   * and passing and empty array as the second argument to make it run only once
   */
  useEffect(() => {
    csv("/data/products.csv").then((data) => {
      setProducts(data);
    });
  }, []);

  console.log(products, "productSSS");
  return (
    <div>
      <Header />
      <div className="toolbar">
        {/* Our Input Search Field */}
        <input type="text" placeholder="Search..." />
      </div>

      <div>
        {/* Our Product List */}
        <List p="10" pt="3" spacing={2}>
          {_DATA.currentData().map((product) => {
            return (
              <List
                sx={{
                  width: "100%",
                  maxWidth: 1360,
                  bgcolor: "background.paper",
                }}
                key={product.gtin}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={product.title} src={product.image_link} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {product.price}
                        </Typography>{" "}
                        — {product.sale_price}
                      </React.Fragment>
                    }
                  />
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {product.gender
                      .charAt(0)
                      .toUpperCase()
                      .concat(...product.gender.slice(1))}
                  </Typography>{" "}
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            );
          })}
        </List>
        {/* Pagination Component */}
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Home;
