/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import RecipeButton from "../Button";
import FlexBox from "../FlexBox";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import mockRecipeApi from "../RecipeApi";
import { useParams } from "react-router-dom";

function RecipePage({ id, headline, description, details, buttonText }) {
  const RecipeContainer = styled(FlexBox)`
    padding: 0px 16px 0px 16px;
  `;

  const RecipeCardWrapper = styled(FlexBox)`
    width: 360px;
    border-radius: 4px;
    transition: box-shadow 0.1s linear 0s;
    box-shadow: rgb(0 0 0 / 20%) 0px 8px 16px 0px;
    cursor: pointer;
    margin-bottom: 28px;
  `;

  const RecipeCardDetailsWrapper = styled(FlexBox)`
    max-width: 340px;
  `;

  const RecipeCardDetailsContainer = styled.div`
    padding: 10px;
  `;

  const RecipeButtonContainer = styled(FlexBox)`
    align-items: center;
    height: 65px;
  `;

  /*** NON BOX COMPONENETS */

  const RecipeCardText = styled.p`
    color: #242424;
    margin: 0px;
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
  `;

  const RecipeCardDescription = styled(RecipeCardText)`
    margin: 0px 0px 8px;
    line-height: 18px;
  `;

  const RecipeCardDetails = styled(RecipeCardText)`
    font-weight: 600;
  `;

  const RecipeCardHeadline = styled.h4`
    margin: 0px 0px 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
  `;

  const mockRecipeImage =
    "https://dummyimage.com/360x200/5db553/fff.png&text=recipe+image";

  // const RecipeImage = styled.image`
  //   background-image: url(${mockRecipeImage});
  // `;

  const Wrapper = (props) => (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1200px;
      `}
      {...props}
    />
  );
  const MainWrapper = (props) => (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
      {...props}
    />
  );

  // const [isLoading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState({});
  const params = useParams();
  useEffect(() => {
    setRecipe(mockRecipeApi(params.id));
  }, []);

  return (
    <MainWrapper>
      <Wrapper>
        <RecipeContainer>
          <RecipeCardWrapper direction="column">
            <div>
              <img src={mockRecipeImage} alt="recipe" />
            </div>
            <RecipeCardDetailsContainer>
              <RecipeCardDetailsWrapper direction="column">
                <RecipeCardHeadline>{recipe.headline}</RecipeCardHeadline>
                <RecipeCardDescription>
                  {recipe.description}
                </RecipeCardDescription>
                <RecipeCardDetails>{recipe.details}</RecipeCardDetails>
              </RecipeCardDetailsWrapper>
            </RecipeCardDetailsContainer>
            <RecipeButtonContainer>
              <RecipeButton>{buttonText}</RecipeButton>
            </RecipeButtonContainer>
          </RecipeCardWrapper>
        </RecipeContainer>
      </Wrapper>
    </MainWrapper>
  );
}

const WrappedDetails = () => {
  const params = useParams();
  return <RecipePage params={params} />;
};

export default WrappedDetails;
