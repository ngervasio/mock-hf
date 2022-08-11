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
  display: flex;
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

const DeliveryDateButton = (props) => {
  return <Button buttonType={props.buttonType}>{props.children}</Button>;
};

export default DeliveryDateButton;
