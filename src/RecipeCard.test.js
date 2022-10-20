import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import mockRecipeApi from "./api/MockRecipeApi";

describe("recipe card", () => {
  it("should display a button", () => {
    render(<RecipeCard />, { wrapper: BrowserRouter });
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle("background-color: #067a46");
  });
  it("should display an image", () => {
    render(<RecipeCard />, { wrapper: BrowserRouter });
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  it("should display recipe details text", () => {
    const recipeData = {
      id: 1,
      title: "title",
      sides: "sides",
      details: "details",
      buttonText: "button text",
    };
    render(
      <RecipeCard
        title={recipeData.title}
        sides={recipeData.sides}
        details={recipeData.details}
        buttonText={recipeData.buttonText}
      />,
      { wrapper: BrowserRouter }
    );
    // TODO: HOW TO TEST ID ?
    // WOULD I ALSO TEST THE LINK IN THE BUTTON ?
    // WOULD I ALSO TEST THE IMAGE IS CORRECT ?
    expect(screen.getByText(recipeData.title)).toBeInTheDocument();
    expect(screen.getByText(recipeData.sides)).toBeInTheDocument();
    expect(screen.getByText(recipeData.details)).toBeInTheDocument();
    expect(screen.getByText(recipeData.buttonText)).toBeInTheDocument();
  });
  it("should return recipe data", () => {
    jest.mock("./api/mockRecipeApi");
  });
});
