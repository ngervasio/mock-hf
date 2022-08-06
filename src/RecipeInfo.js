/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import RecipeButton from "./Button";

export default function RecipeInfo() {
  const RecipeInfo = (props) => (
    <div
      css={css`
        display: flex;
        align-content: center;
        justify-content: center;
        width: 1100px;
        padding: 20px 0px 0px 0px;
      `}
      {...props}
    />
  );

  const RecipeContainer = (props) => (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        padding: 0px 16px 0px 16px;
      `}
      {...props}
    />
  );

  const RecipeCardWrapper = (props) => (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        width: 360px;
        border-radius: 4px;
        transition: box-shadow 0.1s linear 0s;
        border: 2px solid rgb(6, 122, 70);
        margin: -2px;
        cursor: pointer;
      `}
      {...props}
    />
  );
  const RecipeCardHeadline = (props) => (
    <h4
      css={css`
        margin: 0px 0px 4px;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
      `}
      {...props}
    >
      {props.children}
    </h4>
  );
  const RecipeCardDescription = (props) => (
    <p
      css={css`
        margin: 0px 0px 8px;
        font-size: 14px;
        line-height: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
      `}
      {...props}
    >
      {props.children}
    </p>
  );
  const RecipeCardDetails = (props) => (
    <div
      css={css`
        font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
        font-size: 14px;
        line-height: normal;
        font-weight: 600;
        color: rgb(36, 36, 36);
      `}
      {...props}
    >
      {props.children}
    </div>
  );

  const NumberOfRecipeContainer = (props) => (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 65px;
      `}
      {...props}
    />
  );

  return (
    <RecipeInfo>
      <RecipeContainer>
        <RecipeCardWrapper>
          <div>
            <img src="https://via.placeholder.com/360x200.png" alt="recipe" />
          </div>
          <div>
            <RecipeCardHeadline>
              Caesar Salad with marinated chicken
            </RecipeCardHeadline>
            <RecipeCardDescription>
              ready-to-eat dish contains max. 20% carbohydrates
            </RecipeCardDescription>
            <RecipeCardDetails>35 min</RecipeCardDetails>
          </div>
          <NumberOfRecipeContainer>
            <RecipeButton type="">Cook now</RecipeButton>
          </NumberOfRecipeContainer>
        </RecipeCardWrapper>
      </RecipeContainer>
    </RecipeInfo>
  );
}
