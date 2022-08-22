/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Button = styled.button`
  color: ${(props) => {
    if (props.buttonType === "secondary") {
      return "#8e8e8e";
    } else {
      return "#067a46";
    }
  }};
  display: inline-flex;
  flex-direction: column;
  vertical-align: text-bottom;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  font-family: Agrandir, Verdana, Geneva, sans-serif;
  text-transform: none;
  text-decoration: none;
  letter-spacing: 0.7px;
  border: none;
  border-radius: 4px;
  height: 62px;
  width: 95px;
  background-color: ${(props) => {
    if (props.buttonType === "secondary") {
      return "#eeeeee";
    } else {
      return "#ffffff";
    }
  }};
`;

const DateButtonSpan = styled.span`
  font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  font-size: 13px;
`;

const DeliveryDateButton = (props) => {
  return (
    <Button buttonType={props.buttonType} onClick={props.onClick}>
      <DateButtonSpan>{props.weekday}</DateButtonSpan>
      <DateButtonSpan>{props.date}</DateButtonSpan>
      <DateButtonSpan>{props.month}</DateButtonSpan>
    </Button>
  );
};

export default DeliveryDateButton;
