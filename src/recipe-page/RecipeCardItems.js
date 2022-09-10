/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import FlexBox from "../FlexBox";

export default function RecipeCardItems({
  description,
  allergens,
  allerens_note,
}) {
  const RecipeCardText = styled.p`
    color: #242424;
    margin: 0px;
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
  `;

  const SectionDetails = styled(RecipeCardText)`
    margin: 0px 0px 8px;
    line-height: 18px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  `;

  const SectionTitle = styled.h4`
    margin: 0px 0px 4px;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-decoration: none;
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
  `;

  return (
    <div>
      <SectionTitle>descripition</SectionTitle>
      <SectionDetails>{description}</SectionDetails>
      <SectionTitle>allergens</SectionTitle>
      <SectionDetails>{allergens}</SectionDetails>
      <SectionDetails>{allerens_note}</SectionDetails>
    </div>
  );
}
