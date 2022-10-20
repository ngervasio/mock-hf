import { render, screen } from "@testing-library/react";
import RecipePage from "./RecipePage";
import mockRecipeApi from "../api/MockRecipeApi";

jest.mock("../api/MockRecipeApi");

describe("recipe page", () => {
  it("should ...", () => {
    render(<RecipePage />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    /**
     *  Expected number of calls: 1
        Received number of calls: 0
     */
    expect(mockRecipeApi).toHaveBeenCalledTimes(1);
  });
});
