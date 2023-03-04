import { css } from '@emotion/css';

export const pc_area = () => css`
  display: none;
  @media screen and (min-width:1024px) {
    display: inherit; 
  }
`;

export const sp_area = () => css`
  display: none;
  @media screen and (max-width:1024px) {
    display: inherit; 
  }
`;