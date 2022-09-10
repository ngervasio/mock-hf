/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import FlexBox from "../FlexBox";
import RecipeButton from "../Button";
import RecipePageHeaderDetail from "./RecipePageHeaderDetail";
export default function RecipePageHeader({
  details,
  calories,
  level,
  buttonText,
}) {
  const RecipeButtonContainer = styled(FlexBox)`
    align-items: center;
    height: 65px;
  `;

  const RecipeCardText = styled.p`
    color: #242424;
    margin: 0px;
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
  `;

  const RecipeCardDetails = styled(RecipeCardText)`
    font-weight: 600;
  `;

  return (
    <FlexBox justifyContent="space-between">
      <RecipeButtonContainer>
        <RecipeCardDetails>{details}</RecipeCardDetails>
        <RecipeCardDetails>{calories}</RecipeCardDetails>
        <RecipeCardDetails>{level}</RecipeCardDetails>
      </RecipeButtonContainer>
      <RecipeButtonContainer>
        <RecipeButton>{buttonText}</RecipeButton>
      </RecipeButtonContainer>
    </FlexBox>
  );
}
