/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const FlexBox = styled.div(
  ({ direction, justifyContent, alignContent }) => `
display: flex;
flex-direction: ${direction ? direction : "row"};
justify-content: ${justifyContent ? justifyContent : "center"};
align-content: ${alignContent ? alignContent : "center"};
`
);

// export const FlexBox = styled.div`
//   display: flex;
//   flex-direction: ${(props) =>
//     props.direction === "column" ? "column" : "row"};
//   justify-content: ${(props) =>
//     props.justifyContent ? props.justifyContent : "flex-start"};
// `;

// export const FlexBox = styled.div(
//   ({ direction, justifyContent }) => `
//     display: flex;
//     flex-direction: ${direction === "column" ? "column" : "row"};
//     justify-content: ${justifyContent ? justifyContent : "flex-start"};
// `
// );

export default FlexBox;
