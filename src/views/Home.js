import React, { useState, useEffect } from "react";
import { csv } from "d3"; // For CSV Conversion I used the d3 Library
import Header from "../components/Header";
import ProductList from "../components/ProductList.js";

function Home() {
  /**
   * Our list of Products **STATE, using React Hooks.
   */
  const [products, setProducts] = useState([]);

  /**
   * Use effect to fetch the data once the component is rendered,
   * and passing and empty array as the second argument to make it run only once.
   */
  useEffect(() => {
    csv("/data/products.csv").then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      {/* Our Header */}
      <Header />
      {/* Our Product List */}
      <ProductList data={products} />
    </div>
  );
}

export default Home;
