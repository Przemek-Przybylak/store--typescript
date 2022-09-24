import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

      html{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    };
    *, ::after, ::before {
        box-sizing: inherit;
    };

    body {
      transition: 300ms;
      margin: 0;
      padding: 0;
      };
`;
