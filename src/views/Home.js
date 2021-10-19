import React, { useState, useEffect } from "react";

import Header from "../components/Header";

// For CSV Conversion I used the d3 Library
import { csv } from "d3";

function Home() {
  // Our list of Products **state, using React Hooks
  const [products, setProducts] = useState();
  /**
   * Use effect to fetch the data once the component is rendered,
   * and passing and empty array as the second argument to make it run only once
   */
  useEffect(() => {
    csv("/data/products.csv").then((data) => {
      setProducts(data);
    });
  }, []);
  console.log(products, "data");
  return (
    <div>
      <Header />
    </div>
  );
}

export default Home;
