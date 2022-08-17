/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import NavButton from "./NavButton";
import DeliveryDateButton from "./DeliveryDateButton";
import FlexBox from "./FlexBox";

export default function WeeklyNav() {
  const WeeklyNav = styled(FlexBox)`
    align-items: center;
    width: 1200px;
    padding: 20px 0px 0px 0px;
  `;

  // TODO: ON CLICK ADD PROP BUTTONTYPE = SECONDARY TO DELIVERY DATE BUTTON

  const previous = "<";
  const next = ">";

  const deliveryDays = [
    {
      weekday: "sat",
      date: "02",
      month: "july",
    },
    {
      weekday: "sat",
      date: "09",
      month: "july",
    },
    {
      weekday: "sat",
      date: "16",
      month: "july",
    },
    {
      weekday: "sat",
      date: "23",
      month: "july",
    },
  ];

  return (
    <WeeklyNav>
      <NavButton>{previous}</NavButton>
      {deliveryDays.map((day) => (
        <DeliveryDateButton
          buttonType="secondary"
          weekday={day.weekday}
          date={day.date}
          month={day.month}
        />
      ))}
      <NavButton>{next}</NavButton>
    </WeeklyNav>
  );
}
