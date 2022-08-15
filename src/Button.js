/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Button = styled.button(
  ({ buttonType }) => `
color: ${buttonType === "ghost" ? "#067a46" : "#fff"};
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
background-color: ${buttonType === "ghost" ? "#fff" : "#067a46"};
box-shadow: ${buttonType === "ghost" ? "" : "rgb(0 0 0 / 20%) 0px 8px 16px 0px"}
  }};
`
);

const RecipeButton = ({ buttonType, children }) => {
  return <Button buttonType={buttonType}>{children}</Button>;
};

export default RecipeButton;
