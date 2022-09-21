/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export default function RecipePageHeaderDetail({ detail, detailTitle }) {
  const RecipeCardText = styled.p`
    color: #242424;
    margin: 0px;
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
  `;

  const DetailTitle = styled(RecipeCardText)`
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
  `;

  const Detail = styled(DetailTitle)`
    font-weight: 400;
  `;

  const DetailBox = styled.div`
    padding-right: 20px;
  `;

  return (
    <DetailBox>
      <DetailTitle>{detailTitle}</DetailTitle>
      <Detail>{detail}</Detail>
    </DetailBox>
  );
}
