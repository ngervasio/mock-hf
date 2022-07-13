/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function testPage() {
  const color = "skyblue";

  const P = (props) => (
    <p
      css={{
        margin: 0,
        fontSize: 12,
        lineHeight: "1.5",
        fontFamily: "sans-serif",
        color: "black",
      }}
      {...props} // <- props contains the `className` prop
    />
  );

  const ArticleText = (props) => (
    <P
      css={{
        fontSize: 14,
        fontFamily: "Georgia, serif",
        color: "darkgray",
      }}
      {...props} // <- props contains the `className` prop
    />
  );

  return (
    // <div
    //   css={css`
    //     background-color: hotpink;
    //     &:hover {
    //       color: ${color};
    //     }
    //   `}
    // >
    //   This has a hotpink background.
    // </div>
    <div>
      <P>nuno gervasio</P>
      <ArticleText>text one</ArticleText>
    </div>
  );
}
