/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  :root {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  body {
    font-family: sans-serif;
  }
`;

export default GlobalStyles;
