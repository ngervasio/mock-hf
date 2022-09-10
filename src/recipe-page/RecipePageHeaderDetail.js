/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export default function RecipePageHeaderDetail({ detail }) {
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

  return <RecipeCardDetails>{detail}</RecipeCardDetails>;
}
