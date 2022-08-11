/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavButton from "./NavButton";
import DeliveryDateButton from "./DeliveryDateButton";
import styled from "@emotion/styled";

export default function WeeklyNav() {
  const WeeklyNav = (props) => (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1100px;
        padding: 20px 0px 0px 0px;
      `}
      {...props}
    />
  );
  const DateButtonSpan = styled.span`
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    font-size: 13px;
  `;

  const previous = "<";
  const next = ">";
  return (
    <WeeklyNav>
      <NavButton bgColor="blue">{previous}</NavButton>
      <DeliveryDateButton buttonType="secondary">
        <DateButtonSpan>SAT</DateButtonSpan>
        <DateButtonSpan>02</DateButtonSpan>
        <DateButtonSpan>July</DateButtonSpan>
      </DeliveryDateButton>
      <DeliveryDateButton>
        <DateButtonSpan>SAT</DateButtonSpan>
        <DateButtonSpan>09</DateButtonSpan>
        <DateButtonSpan>July</DateButtonSpan>
      </DeliveryDateButton>
      <DeliveryDateButton>
        <DateButtonSpan>SAT</DateButtonSpan>
        <DateButtonSpan>16</DateButtonSpan>
        <DateButtonSpan>July</DateButtonSpan>
      </DeliveryDateButton>
      <DeliveryDateButton>
        <DateButtonSpan>SAT</DateButtonSpan>
        <DateButtonSpan>23</DateButtonSpan>
        <DateButtonSpan>July</DateButtonSpan>
      </DeliveryDateButton>
      <NavButton>{next}</NavButton>
    </WeeklyNav>
  );
}
