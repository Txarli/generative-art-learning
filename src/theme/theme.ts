import { css } from 'styled-components';
import { rem } from 'polished';
import 'typeface-inconsolata';
import 'typeface-montserrat';

const fontFamily = {
  titles: 'Inconsolata, sans-serif',
  base: 'Montserrat, serif',
};

export const font = {
  base() {
    return css`
      font-size: ${rem(16)};
      line-height: ${rem(22)};
      font-family: ${fontFamily.base};
    `;
  },
};
