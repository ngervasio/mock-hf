/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Button = styled.button`
  color: ${(props) => {
    if (props.buttontype === "primary") {
      return "#ffffff";
    } else {
      return "#067a46";
    }
  }};
  display: inline-flex;
  vertical-align: text-bottom;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-family: Agrandir, Verdana, Geneva, sans-serif;
  text-transform: none;
  text-decoration: none;
  letter-spacing: 0.7px;
  height: 40px;
  width: 340px;
  border-style: solid;
  border-width: 1px;
  border-color: #067a46;
  background-color: ${(props) => (props.primary ? "#067a46" : "#ffffff")};
  box-shadow: ${(props) =>
    props.primary ? "rgb(0 0 0 / 20%) 0px 8px 16px 0px" : ""};
`;

const RecipeButton = (props) => {
  return <Button buttontype={props.type}>{props.children}</Button>;
};

export default RecipeButton;
