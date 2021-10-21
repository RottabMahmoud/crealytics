import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Search from "../components/Search";
import "@testing-library/jest-dom/extend-expect";

it("renders the Search Component", () => {
  const setSearch = jest.fn((value) => {});
  render(
    <Search
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
      setSearch={setSearch}
    />
  );
});

describe("Search Input value", () => {
  it("updates on typing in the Search input text field", () => {
    const setSearch = jest.fn((value) => {});

    const container = render(
      <Search
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
        setSearch={setSearch}
      />
    );

    const input = container.getByDisplayValue("");

    fireEvent.change(input, { target: { value: "42" } });
    expect(input.value).toBe("42");
  });
});
