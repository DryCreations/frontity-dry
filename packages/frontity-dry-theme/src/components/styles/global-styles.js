import { css, styled } from "frontity";

const globalStyles = (colors) => css`
  body {
    background: ${colors.bodyBackground};
  }
`;

export default globalStyles;
