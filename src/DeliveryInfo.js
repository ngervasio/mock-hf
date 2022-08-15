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

  const SpanBase = styled.span`
    color: #242424;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 400;
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
  `;

  const DeliveryStatus = styled(SpanBase)`
    color: #067a46;
    padding-right: 8px;
  `;

  const DeliveryStatusLink = styled(SpanBase)`
    text-decoration: underline;
  `;

  const DeliveryInfoText = styled(SpanBase)`
    font-size: 24px;
    line-height: 32px;
    font-family: Agrandir, Verdana, Geneva, sans-serif;
  `;

  return (
    <DeliveryInfo>
      <FlexBox direction="column">
        <FlexBox>
          <DeliveryStatus>DELIVERED</DeliveryStatus>
          <DeliveryStatusLink>Track your delivery here</DeliveryStatusLink>
        </FlexBox>
        <DeliveryInfoText>time to cook!</DeliveryInfoText>
      </FlexBox>
      <RecipeButton buttonType="ghost">Help with delivery</RecipeButton>
    </DeliveryInfo>
  );
}
