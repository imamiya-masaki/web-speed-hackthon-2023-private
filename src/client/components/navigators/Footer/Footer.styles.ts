import { css } from '@emotion/css';

export const container = () => css`
  background-color: #f4f4f4;
  display: grid;
  gap: 24px;
  margin-top: 40px;
  padding: 32px 24px;
`;

export const itemList = () => css`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width:1024px) {
    flex-direction: row;
  }
  @media screen and (max-width:1024px) {
    flex-direction: column;
  }
`;

/**
 * 
 * @returns 
 * export const pc_area = () => css`
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
 */

// export const itemList__desktop = () => css`
//   flex-direction: row;
  
// `;

// export const itemList__mobile = () => css`
//   flex-direction: column;
// `;

export const item = () => css`
  color: #222222;
  font-size: 14px;
`;
