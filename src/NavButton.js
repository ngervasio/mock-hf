/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Button = styled.button(
  ({ buttonType }) =>
    `color: ${buttonType === "primary" ? "#fff" : "#067a46"}
  display: flex;
  vertical-align: text-bottom;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  font-size: 16px;
  font-family: Agrandir, Verdana, Geneva, sans-serif;
  height: 50px;
  width: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: #067a46;
  background-color: ${buttonType === "primary" ? "#067a46" : "#ffffff"};
`
);

// const Button = styled.button`
//   color: ${(props) => (props.buttonType === "primary" ? "#fff" : "#067a46")}
//   display: flex;
//   vertical-align: text-bottom;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   border-radius: 50%;
//   font-size: 16px;
//   font-family: Agrandir, Verdana, Geneva, sans-serif;
//   height: 50px;
//   width: 50px;
//   border-style: solid;
//   border-width: 1px;
//   border-color: #067a46;
//   background-color: ${(props) =>
//     props.buttonType === "primary" ? "#067a46" : "#ffffff"};
// `;

const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  width: 95px;
`;

const NavButton = ({ buttonType, children }) => {
  return (
    <NavButtonWrapper>
      <Button buttonType={buttonType}>{children}</Button>
    </NavButtonWrapper>
  );
};

export default NavButton;
