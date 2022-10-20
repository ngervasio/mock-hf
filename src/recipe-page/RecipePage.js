/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import RecipePageHeader from "./RecipePageHeader";
import RecipeCardItems from "./RecipeCardItems";
import FlexBox from "../FlexBox";
import { useEffect, useState } from "react";
import mockRecipeApi from "../api/MockRecipeApi";
import { useParams } from "react-router-dom";

function RecipePage() {
  const RecipeCardWrapper = styled(FlexBox)`
    width: 750px;
    border-radius: 4px;
    transition: box-shadow 0.1s linear 0s;
    box-shadow: rgb(0 0 0 / 20%) 0px 8px 16px 0px;
    cursor: pointer;
  `;

  const RecipeCardDetailsWrapper = styled(FlexBox)`
    max-width: 750px;
  `;

  const RecipeCardDetailsContainer = styled.div`
    padding: 10px;
  `;

  /*** NON BOX COMPONENETS */

  const mockRecipeImage =
    "https://dummyimage.com/750x450/5db553/fff.png&text=recipe+image";

  // const RecipeImage = styled.image`
  //   background-image: url(${mockRecipeImage});
  // `;

  // PAGE STYLES
  const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
  `;

  const [isLoading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState({});
  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
      const recipeDetails = mockRecipeApi(params.id);
      setLoading(false);
      setRecipe(recipeDetails);
    }, 1000);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <MainWrapper>
        <RecipeCardWrapper direction="column">
          <div>
            <img src={mockRecipeImage} alt="recipe" />
          </div>
          <RecipeCardDetailsContainer>
            <RecipeCardDetailsWrapper direction="column">
              <RecipePageHeader
                recipeDetails={recipe.recipe_page_details}
                buttonText={recipe.buttonText}
              />
              <RecipeCardItems
                description={recipe.description}
                allergens={recipe.allergens}
                allerens_note={recipe.allerens_note}
              />
            </RecipeCardDetailsWrapper>
          </RecipeCardDetailsContainer>
        </RecipeCardWrapper>
      </MainWrapper>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  // can also extract the spacific value
  // const { id } = useParams();
  // then the variable id will have the value
  return <RecipePage params={params} />;
};

export default WrappedDetails;
