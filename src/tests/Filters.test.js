import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import Filters from "../components/Filters";

it("renderes the Filters Component", () => {
  const handleOnSelect = jest.fn((value) => {});
  const valueSelect = "";
  const handlePrice = jest.fn((value) => {});
  const valueCheck = false;
  render(
    <Filters
      handleOnSelect={handleOnSelect}
      valueSelect={valueSelect}
      handlePrice={handlePrice}
      valueCheck={valueCheck}
    />
  );
});

it("Checks the Select value if Selected, and the Checkbox, at the Filters Component", () => {
  const handleOnSelect = jest.fn((value) => {});
  const valueSelect = "Male";
  const handlePrice = jest.fn((value) => {});
  const valueCheck = true;

  const container = render(
    <Filters
      handleOnSelect={handleOnSelect}
      valueSelect={valueSelect}
      handlePrice={handlePrice}
      valueCheck={valueCheck}
    />
  );
  const select = container.getByDisplayValue("Male");
  fireEvent.change(select, { target: { value: "Male" } });
  expect(select.value).toBe("Male");

  const checkboxEl = container.getByLabelText("On-Sale");
  expect(checkboxEl).toBeChecked();
});
