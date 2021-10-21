import { render, screen } from "@testing-library/react";
import Home from "../views/Home";

it("renderes the Header Component", () => {
  render(<Home />);

  // screen.debug();
});
