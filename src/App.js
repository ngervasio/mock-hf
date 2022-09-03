/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipePage from "./routes/RecipePage";

import { css } from "@emotion/react";
import RecipesPage from "./RecipesPage";

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RecipesPage />} />
            <Route path="recipe/:id" element={<RecipePage />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </MainWrapper>
  );
}

// reusable containers/wrappers in React-do you make dynamic ones? are ther any other common dynamic componenets in react?
// do you recommend firefox over chrome?
