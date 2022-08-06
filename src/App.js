/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Header from "./Header";
import DeliveryInfo from "./DeliveryInfo";
import RecipeInfo from "./RecipeInfo";

export default function testPage() {
  const Wrapper = (props) => (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1200px;
      `}
      {...props} // <- props contains the `className` prop
    />
  );
  const MainWrapper = (props) => (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
      {...props} // <- props contains the `className` prop
    />
  );

  return (
    <MainWrapper>
      <Wrapper>
        {/* recipe information dates section */}
        <Header />
        {/* recipe information delivery section */}
        <DeliveryInfo />
        {/* recipe information cards section */}
        <RecipeInfo />
      </Wrapper>
    </MainWrapper>
  );
}

// reusable containers/wrappers in React-do you make dynamic ones? are ther any other common dynamic componenets in react?
// do you recommend firefox over chrome?
