import { render, screen } from "@testing-library/react";
import ProductList from "../components/ProductList.js";

test("in intial render, the buttons are working", () => {
  render(
    <ProductList
      data={[
        {
          gtin: "2001007926858",
          title: "Weekday THURSDAY Jeans Slim Fit black",
          gender: "female",
          additional_image_link:
            "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg",
          image_link:
            "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
          price: "39.95 EUR",
          sale_price: "39.95 EUR",
        },
      ]}
    />
  );
  // screen.getByRole("");
});
