/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import NavButton from "./NavButton";
import DeliveryDateButton from "./DeliveryDateButton";
import FlexBox from "./FlexBox";
import { useState } from "react";

export default function WeeklyNav() {
  const WeeklyNav = styled(FlexBox)`
    align-items: center;
    width: 1200px;
    padding: 20px 0px 0px 0px;
  `;

  const [buttonType, setButtonType] = useState("");
  const [selectedWeekId, setSelectedWeekId] = useState(null);

  const previous = "<";
  const next = ">";

  const deliveryDays = [
    {
      weekday: "sat",
      date: "02",
      month: "july",
      weekId: 1,
    },
    {
      weekday: "sat",
      date: "09",
      month: "july",
      weekId: 2,
    },
    {
      weekday: "sat",
      date: "16",
      month: "july",
      weekId: 3,
    },
    {
      weekday: "sat",
      date: "23",
      month: "july",
      weekId: 4,
    },
  ];

  const handleClick = (weekId) => {
    setSelectedWeekId(weekId);
  };

  return (
    <WeeklyNav>
      <NavButton>{previous}</NavButton>
      {deliveryDays.map((day) => (
        <DeliveryDateButton
          onClick={() => {
            handleClick(day.weekId);
          }}
          buttonType={selectedWeekId === day.weekId ? "secondary" : ""}
          weekday={day.weekday}
          date={day.date}
          month={day.month}
        />
      ))}
      <NavButton>{next}</NavButton>
    </WeeklyNav>
  );
}
