import { render, screen } from "@testing-library/react";
import Header from "../components/Header.js";

it("renderes the header", () => {
  render(<Header />);

  // screen.debug();
  // screen.getByRole("");
});
