import { css, styled } from "frontity";

const cssReset = css`
  /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
  	line-height: 1;
  }
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }
`;

const accessibilitySettings = css`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }
`;

const documentSetup = (colors) => css`
  body {
    background: ${colors.background.body};
    color: ${colors.text.main};
  }

  html {overflow-y: scroll;}

  a {
    color: ${ colors.text.link };
    text-decoration: none;
  }
`;

const elementBase = (colors, accent) => css`
  main {
    display: block;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .faux-heading {
    font-feature-settings: "lnum";
    font-variant-numeric: lining-nums;
    font-weight: 700;
    letter-spacing: -0.0415625em;
    line-height: 1.25;
    margin: 3.5rem 0 2rem;
  }
  h1,
  .heading-size-1 {
    font-size: 3.6rem;
    font-weight: 800;
    line-height: 1.138888889;
  }
  h2,
  .heading-size-2 {
    font-size: 3.2rem;
  }
  h3,
  .heading-size-3 {
    font-size: 2.8rem;
  }
  h4,
  .heading-size-4 {
    font-size: 2.4rem;
  }
  h5,
  .heading-size-5 {
    font-size: 2.1rem;
  }
  h6,
  .heading-size-6 {
    font-size: 1.6rem;
    letter-spacing: 0.03125em;
    text-transform: uppercase;
  }
  p {
    line-height: 1.5;
    margin: 0 0 1em 0;
  }
  em,
  i,
  q,
  dfn {
    font-style: italic;
  }
  em em,
  em i,
  i em,
  i i,
  cite em,
  cite i {
    font-weight: bolder;
  }
  big {
    font-size: 1.2em;
  }
  small {
    font-size: 0.75em;
  }
  b,
  strong {
    font-weight: 700;
  }
  ins {
    text-decoration: underline;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
  abbr,
  acronym {
    cursor: help;
  }
  address {
    line-height: 1.5;
    margin: 0 0 2rem 0;
  }
  hr {
    border-style: solid;
    border-width: 0.1rem 0 0 0;
    border-color: ${ accent };
  }
  a {
    color: ${ accent };
    text-decoration: underline;
  }
  a:hover,
  a:focus {
    text-decoration: none;
  }
`;

const listStyle = css`
  ul,
  ol {
    margin: 0 0 3rem 3rem;
  }
  ul {
    list-style: disc;
  }
  ul ul {
    list-style: circle;
  }
  ul ul ul {
    list-style: square;
  }
  ol {
    list-style: decimal;
  }
  ol ol {
    list-style: lower-alpha;
  }
  ol ol ol {
    list-style: lower-roman;
  }
  li {
    line-height: 1.5;
    margin: 0.5rem 0 0 2rem;
  }
  li > ul,
  li > ol {
    margin: 1rem 0 0 2rem;
  }
  .reset-list-style,
  .reset-list-style ul,
  .reset-list-style ol {
    list-style: none;
    margin: 0;
  }
  .reset-list-style li {
    margin: 0;
  }
  dt,
  dd {
    line-height: 1.5;
  }
  dt {
    font-weight: 700;
  }
  dt + dd {
    margin-top: 0.5rem;
  }
  dd + dt {
    margin-top: 1.5rem;
  }
`;

const mediaStyle = (colors) => css`
  figure {
    display: block;
    margin: 0;
  }
  iframe {
    display: block;
    max-width: 100%;
  }
  video {
    display: block;
  }
  svg,
  img,
  embed,
  object {
    display: block;
    height: auto;
    max-width: 100%;
  }
  figcaption,
  .wp-caption-text {
    color: ${colors.text.caption};
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1.5rem;
  }
  figcaption a,
  .wp-caption-text a {
    color: inherit;
  }
`;

const tableStyles = (colors) => css`
  table {
    border: 0.1rem solid ${colors.text.caption};
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    font-size: 1.6rem;
    margin: 4rem 0;
    max-width: 100%;
    overflow: hidden;
    width: 100%;
  }
  .alignleft > table {
    margin: 0;
  }
  .alignright > table {
    margin: 0;
  }
  th,
  td {
    border: 0.1rem solid ${colors.text.caption};
    line-height: 1.4;
    margin: 0;
    overflow: visible;
    padding: 0.5em;
  }
  caption {
    background: ${colors.text.caption};
    font-weight: 600;
    padding: 0.5em;
    text-align: center;
  }
  thead {
    vertical-align: bottom;
    white-space: nowrap;
  }
  th {
    font-weight: 700;
  }
`;

const quoteStyle = (colors, accent) => css`
  blockquote {
    border-color: ${accent};
    border-style: solid;
    /*rtl:ignore*/
    border-width: 0 0 0 0.2rem;
    color: inherit;
    font-size: 1em;
    margin: 4rem 0;
    /*rtl:ignore*/
    padding: 0.5rem 0 0.5rem 2rem;
  }
  cite {
    color: ${colors.text.caption};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25;
  }
  blockquote cite {
    display: block;
    margin: 2rem 0 0 0;
  }
  blockquote p:last-child {
    margin: 0;
  }
`;

const codeStyle = (colors, accent) => css`
  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
    font-size: 0.9em;
    padding: 0.4rem 0.6rem;
  }
  code,
  kbd,
  samp {
    background: rgba(0, 0, 0, 0.075);
    border-radius: 0.2rem;
  }
  pre {
    border: 0.1rem solid ${accent};
    line-height: 1.5;
    margin: 4rem 0;
    overflow: auto;
    padding: 3rem 2rem;
    text-align: left;
  }
  pre code {
    background: transparent;
    padding: 0;
  }
`;

const globalStyles = (colors, accent) => css([
  cssReset,
  documentSetup(colors),
  accessibilitySettings,
  elementBase(colors, accent),
  listStyle,
  mediaStyle(colors),
  codeStyle(colors, accent),
  quoteStyle(colors, accent),
  tableStyles(colors)

]);

export default globalStyles;
