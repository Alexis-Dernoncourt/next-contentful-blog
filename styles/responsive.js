import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 495px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 950px) {
      ${props}
    }
  `;
};

export const Width1150px = (props) => {
  return css`
    @media only screen and (max-width: 1150px) {
      ${props}
    }
  `;
};

export const Width1460px = (props) => {
  return css`
    @media only screen and (max-width: 1460px) {
      ${props}
    }
  `;
};
