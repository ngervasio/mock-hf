import { render, screen } from "@testing-library/react";
import RecipeInfo from "./Recipes";
import mockRecipeApi from "./api/MockRecipeApi";

jest.mock("./api/MockRecipeApi");

describe("recipes", () => {
  it("should ...", () => {
    render(<RecipeInfo />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(mockRecipeApi).toHaveBeenCalledTimes(1);
  });
});
