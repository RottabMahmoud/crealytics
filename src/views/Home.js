import React, { useState, useEffect } from "react";

import Header from "../components/Header";

// For CSV Conversion I used the d3 Library
import { csv } from "d3";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    csv("/data/products.csv").then((data) => {
      console.log(data, "DATA");
    });
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
}

export default Home;
