/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import FlexBox from "./FlexBox";
import RecipeCard from "./RecipeCard";

export default function RecipeInfo() {
  const RecipeInfo = styled(FlexBox)`
    flex-wrap: wrap;
    width: 1200px;
    padding: 20px 0px 0px 0px;
  `;

  const recipeCardData = [
    {
      headline: "Caesar Salad with marinated chicken",
      description: "ready-to-eat dish contains max. 20% carbohydrates",
      details: "35M in",
      buttonText: "Cook now",
    },
    {
      headline: "Caesar Salad with marinated chicken",
      description: "ready-to-eat dish contains max. 20% carbohydrates",
      details: "35M in",
      buttonText: "Cook now",
    },
    {
      headline: "Caesar Salad with marinated chicken",
      description: "ready-to-eat dish contains max. 20% carbohydrates",
      details: "35M in",
      buttonText: "Cook now",
    },
    {
      headline: "Caesar Salad with marinated chicken",
      description: "ready-to-eat dish contains max. 20% carbohydrates",
      details: "35M in",
      buttonText: "Cook now",
    },
  ];

  // TODO: ON CLICK EVENT FOR RECIPE CARD
  return (
    <RecipeInfo justifyContent="flex-start">
      {recipeCardData.map((recipe) => (
        <RecipeCard
          headline={recipe.headline}
          description={recipe.description}
          details={recipe.details}
          buttonText={recipe.buttonText}
        />
      ))}
    </RecipeInfo>
  );
}
