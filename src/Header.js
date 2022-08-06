/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function WeeklyNav() {
  const WeeklyNav = (props) => (
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

  const Button = (props) => (
    <button
      css={css`
        color: rgb(6, 122, 70);
        padding-top: 8px;
        padding-bottom: 8px;
        background-color: rgb(255, 255, 255);
        text-align: center;
        outline: none;
        border: none;
        width: 100%;
        overflow: hidden;
        position: relative;
      `}
      {...props} // <- props contains the `className` prop
    />
  );
  const SpanWrapper = (props) => (
    <span
      css={css`
        padding: 4px 0px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        text-align: center;
        position: relative;
        background-color: skyblue;
        background-size: 100% 100%, auto;
        background-repeat: no-repeat;
        background-position: center center;
      `}
      {...props} // <- props contains the `className` prop
    />
  );
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
    <WeeklyNav>
      <Button>
        <SpanWrapper>
          <SpanButtonText></SpanButtonText>
          <SpanButtonText>Previous</SpanButtonText>
          <SpanButtonText></SpanButtonText>
        </SpanWrapper>
      </Button>
      <Button>
        <SpanWrapper>
          <SpanButtonText>Tue</SpanButtonText>
          <SpanButtonText>9</SpanButtonText>
          <SpanButtonText>AUG</SpanButtonText>
        </SpanWrapper>
      </Button>
      <Button>
        <SpanWrapper>
          <SpanButtonText>Tue</SpanButtonText>
          <SpanButtonText>9</SpanButtonText>
          <SpanButtonText>AUG</SpanButtonText>
        </SpanWrapper>
      </Button>
      <Button>
        <SpanWrapper>
          <SpanButtonText>Tue</SpanButtonText>
          <SpanButtonText>9</SpanButtonText>
          <SpanButtonText>AUG</SpanButtonText>
        </SpanWrapper>
      </Button>
      <Button>
        <SpanWrapper>
          <SpanButtonText>Tue</SpanButtonText>
          <SpanButtonText>9</SpanButtonText>
          <SpanButtonText>AUG</SpanButtonText>
        </SpanWrapper>
      </Button>
      <Button>
        <SpanWrapper>
          <SpanButtonText></SpanButtonText>
          <SpanButtonText>Next</SpanButtonText>
          <SpanButtonText></SpanButtonText>
        </SpanWrapper>
      </Button>
    </WeeklyNav>
  );
}
