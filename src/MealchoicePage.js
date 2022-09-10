/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "./Header";
import Delivery from "./Delivery";
import Recipes from "./Recipes";

export default function MealchoicePage() {
  // PAGE STYLES
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
  `;

  const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <MainWrapper>
      <Wrapper>
        <Header />
        <Delivery />
        <Recipes />
      </Wrapper>
    </MainWrapper>
  );
}
