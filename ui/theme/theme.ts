import { css } from 'styled-components';
import { rem } from 'polished';
import 'typeface-inconsolata';
import 'typeface-montserrat';

const fontFamily = {
  titles: 'Inconsolata, sans-serif',
  base: 'Montserrat, serif',
};

const fontWeight = {
  regular: 400,
  bold: 700,
};

export const font = {
  base() {
    return css`
      font-size: ${rem(16)};
      line-height: ${rem(22)};
      font-family: ${fontFamily.base};
      font-weight: ${fontWeight.regular};
    `;
  },
  h1() {
    return css`
      font-size: ${rem(41.83)};
      line-height: ${rem(57)};
      font-family: ${fontFamily.titles};
      font-weight: ${fontWeight.bold};
    `;
  },
};
