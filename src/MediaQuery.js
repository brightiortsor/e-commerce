import { css } from "styled-components";

//Mobile screens and will trigger for screens 320-480px wide
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px) and (min-width: 320px) {
      ${props}
    }
  `;
};

//Portrait tablets
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 640px) and (min-width: 481px) {
      ${props}
    }
  `;
};

//Landscape tablets
export const landscape = (props) => {
  return css`
    @media only screen and (max-width: 960px) and (min-width: 641px) {
      ${props}
    }
  `;
};

// Larger screens
