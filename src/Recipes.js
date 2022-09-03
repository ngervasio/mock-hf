/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import FlexBox from "./FlexBox";
import RecipeCard from "./RecipeCard";
import mockRecipeApi from "./RecipeApi";

export default function RecipeInfo() {
  const RecipeInfo = styled(FlexBox)`
    flex-wrap: wrap;
    width: 1200px;
    padding: 20px 0px 0px 0px;
  `;

  const [allRecipes, setAllRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setAllRecipes(mockRecipeApi());
    }, Math.floor(Math.random() * 1500));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <RecipeInfo justifyContent="flex-start">
        {allRecipes.map((recipe) => (
          <RecipeCard
            id={recipe.id}
            headline={recipe.headline}
            description={recipe.description}
            details={recipe.details}
            buttonText={recipe.buttonText}
          />
        ))}
      </RecipeInfo>
    );
  }
}
