/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import FlexBox from "../FlexBox";
import RecipeButton from "../Button";
import RecipePageHeaderDetail from "./RecipePageHeaderDetail";

export default function RecipePageHeader({ recipeDetails, buttonText }) {
  const HeaderBox = styled(FlexBox)`
    align-items: center;
    height: 65px;
  `;

  return (
    <FlexBox justifyContent="space-between">
      <HeaderBox>
        {console.log("recipeDetails is: " + recipeDetails)}
        {recipeDetails.map((detail) => (
          <RecipePageHeaderDetail detailTitle={detail[0]} detail={detail[1]} />
        ))}
      </HeaderBox>
      <HeaderBox>
        <RecipeButton>{buttonText}</RecipeButton>
      </HeaderBox>
    </FlexBox>
  );
}
