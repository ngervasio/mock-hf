/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import RecipeButton from "./Button";
export default function DeliveryInfo() {
  const DeliveryInfo = (props) => (
    <div
      css={css`
        display: flex;
        align-content: center;
        justify-content: center;
        width: 1100px;
        margin: 0 auto;
        padding: 20px 0px 0px 0px;
      `}
      {...props} // <- props contains the `className` prop
    />
  );

  const Container = (props) => (
    <div
      css={css`
        display: flex;
        flex-direction;
        align-content: center;
        justify-content: center;
        width: 1100px;
        margin: 0 auto;
      `}
      {...props} // <- props contains the `className` prop
    />
  );

  // const SpanWrapper = (props) => (
  //   <span
  //     css={css`
  //       padding: 4px 0px;
  //       border-radius: 4px;
  //       display: flex;
  //       flex-direction: column;
  //       text-align: center;
  //       position: relative;
  //       background-color: skyblue;
  //       background-size: 100% 100%, auto;
  //       background-repeat: no-repeat;
  //       background-position: center center;
  //     `}
  //     {...props} // <- props contains the `className` prop
  //   />
  // );
  const SpanButtonText = (props) => (
    <span
      css={css`
        display: block;
        margin: 0px;
        font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
        text-transform: uppercase;
        font-weight: 600;
        border: none;
        font-size: 13px;
      `}
      {...props} // <- props contains the `className` prop
    />
  );

  return (
    <DeliveryInfo>
      <Container direct="column">
        <SpanButtonText>PENDING</SpanButtonText>
        <SpanButtonText>Process delivery by Thurs, Aug 4</SpanButtonText>
      </Container>
      <RecipeButton>Help with delivery</RecipeButton>
    </DeliveryInfo>
  );
}
