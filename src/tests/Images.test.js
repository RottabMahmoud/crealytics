import { render, screen } from "@testing-library/react";
import Images from "../components/Images.js";

test("renders the Images Component", () => {
  render(
    <Images
      itemData={
        "https://mosaic01.ztat.net/vgs/media/large/PY/52/2E/01/MN/11/PY522E01M-N11@16.jpg, https://mosaic01.ztat.net/vgs/media/large/PY/52/2E/01/MN/11/PY522E01M-N11@15.jpg, https://mosaic01.ztat.net/vgs/media/large/PY/52/2E/01/MN/11/PY522E01M-N11@13.jpg, https://mosaic01.ztat.net/vgs/media/large/PY/52/2E/01/MN/11/PY522E01M-N11@14.jpg"
      }
    />
  );
});
