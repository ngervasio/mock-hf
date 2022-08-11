/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import RecipeButton from "./Button";
import FlexBox from "./FlexBox";

export default function DeliveryInfo() {
  const DeliveryInfo = (props) => (
    <div
      css={css`
        display: flex;
        align-content: center;
        justify-content: space-between;
        width: 1100px;
        margin: 0 auto;
        padding: 20px 0px 0px 0px;
      `}
      {...props}
    />
  );

  const SpanTextOne = styled.span`
    color: rgb(6, 122, 70);
    line-height: 1.5;
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
    display: in-line;
    padding-right: 8px;
  `;

  const SpanTextTwo = styled.span`
    line-height: 1.5;
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: rgb(36, 36, 36);
    display: in-line;
    text-decoration: underline;
  `;

  const SpanTextThree = styled.span`
    font-family: Agrandir, Verdana, Geneva, sans-serif;
    font-weight: 400;
    letter-spacing: unset;
    color: rgb(36, 36, 36);
    font-size: 24px;
    line-height: 32px;
  `;

  return (
    <DeliveryInfo>
      <FlexBox direction="column">
        <FlexBox>
          <SpanTextOne>DELIVERED</SpanTextOne>
          <SpanTextTwo>Track your delivery here</SpanTextTwo>
        </FlexBox>
        <SpanTextThree>time to cook!</SpanTextThree>
      </FlexBox>
      <RecipeButton>Help with delivery</RecipeButton>
    </DeliveryInfo>
  );
}
