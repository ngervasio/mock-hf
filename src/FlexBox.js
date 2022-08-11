/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const FlexBox = styled.div(
  ({ direction }) => `display: flex;
flex-direction: ${direction === "column" ? "column" : "row"};`
);

export default FlexBox;
